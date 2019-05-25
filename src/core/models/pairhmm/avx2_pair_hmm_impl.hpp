// Copyright (c) 2015-2019 Daniel Cooke and Gerton Lunter
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

#ifndef avx2_pair_hmm_impl_hpp
#define avx2_pair_hmm_impl_hpp

#if __GNUC__ >= 6
#pragma GCC diagnostic ignored "-Wignored-attributes"
#endif

#include <cstdint>
#include <immintrin.h>

#include "simd_pair_hmm.hpp"

namespace octopus { namespace hmm { namespace simd {

namespace detail {

template <int n>
auto _left_shift(const __m256i& a) noexcept
{
    static_assert(n < 16, "n must be less than 16");
    return _mm256_alignr_epi8(a, _mm256_permute2x128_si256(a, a, _MM_SHUFFLE(0, 0, 2, 0)), 16 - n);
};
template <>
auto _left_shift<16>(const __m256i& a) noexcept
{
    return _mm256_permute2x128_si256(a, a, _MM_SHUFFLE(0, 0, 2, 0));
}

template <int n>
auto _right_shift(const __m256i& a) noexcept
{
    static_assert(n < 16, "n must be less than 16");
    return _mm256_alignr_epi8(_mm256_permute2x128_si256(a, a, _MM_SHUFFLE(2, 0, 0, 1)), a, n);
}
template <>
auto _right_shift<16>(const __m256i& a) noexcept
{
    return _mm256_permute2x128_si256(a, a, _MM_SHUFFLE(2, 0, 0, 1));
}

} // namespace detail

class InstructionSetPolicyAVX2
{
protected:
    using VectorType = __m256i;
    using ScoreType  = short;
    
    VectorType vectorise(ScoreType x) const noexcept
    {
        return _mm256_set1_epi16(x);
    }
    template <typename T>
    VectorType vectorise(const T* values) const noexcept
    {
        return _mm256_set_epi16(values[15], values[14], values[13], values[12],
                                values[11], values[10], values[9], values[8],
                                values[7], values[6], values[5], values[4],
                                values[3], values[2], values[1], values[0]);
    }
    VectorType vectorise_zero_set_last(ScoreType x) const noexcept
    {
        return _mm256_set_epi16(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x);
    }
    template <int index>
    auto _extract(const VectorType a) const noexcept
    {
        return _mm256_extract_epi16(a, index);
    }
    auto _extract(const VectorType a, const int index) const noexcept
    {
        switch (index) {
            case 0:  return _extract<0>(a);
            case 1:  return _extract<1>(a);
            case 2:  return _extract<2>(a);
            case 3:  return _extract<3>(a);
            case 4:  return _extract<4>(a);
            case 5:  return _extract<5>(a);
            case 6:  return _extract<6>(a);
            case 7:  return _extract<7>(a);
            case 8:  return _extract<8>(a);
            case 9:  return _extract<9>(a);
            case 10:  return _extract<10>(a);
            case 11:  return _extract<11>(a);
            case 12:  return _extract<12>(a);
            case 13:  return _extract<13>(a);
            case 14:  return _extract<14>(a);
            case 15:  return _extract<15>(a);
            default: return _extract<15>(a);
        }
    }
    template <int index, typename T>
    VectorType _insert(const VectorType& a, T i) const noexcept
    {
        return _mm256_insert_epi16(a, i, index);
    }
    template <typename T>
    VectorType _insert(const VectorType& a, const T i, const int index) const noexcept
    {
        switch (index) {
            case 0:  return _insert<0>(a, i);
            case 1:  return _insert<1>(a, i);
            case 2:  return _insert<2>(a, i);
            case 3:  return _insert<3>(a, i);
            case 4:  return _insert<4>(a, i);
            case 5:  return _insert<5>(a, i);
            case 6:  return _insert<6>(a, i);
            case 7:  return _insert<7>(a, i);
            case 8:  return _insert<8>(a, i);
            case 9:  return _insert<9>(a, i);
            case 10:  return _insert<10>(a, i);
            case 11:  return _insert<11>(a, i);
            case 12:  return _insert<12>(a, i);
            case 13:  return _insert<13>(a, i);
            case 14:  return _insert<14>(a, i);
            case 15:  return _insert<15>(a, i);
            default: return _insert<15>(a, i);
        }
    }
    VectorType _add(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_add_epi16(lhs, rhs);
    }
    VectorType _and(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_and_si256(lhs, rhs);
    }
    VectorType _andnot(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_andnot_si256(lhs, rhs);
    }
    VectorType _or(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_or_si256(lhs, rhs);
    }
    VectorType _cmpeq(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_cmpeq_epi16(lhs, rhs);
    }
    template <int n>
    VectorType _left_shift(const VectorType& a) const noexcept
    {
        return detail::_left_shift<n>(a);
    }
    template <int n>
    VectorType _right_shift(const VectorType& a) const noexcept
    {
        return detail::_right_shift<n>(a);
    }
    template <int n>
    VectorType _left_shift_words(const VectorType& a) const noexcept
    {
        return _mm256_slli_epi16(a, n);
    }
    VectorType _min(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_min_epi16(lhs, rhs);
    }
    VectorType _max(const VectorType& lhs, const VectorType& rhs) const noexcept
    {
        return _mm256_max_epi16(lhs, rhs);
    }
};

using AVX2PairHMM = PairHMM<InstructionSetPolicyAVX2>;

} // namespace simd
} // namespace hmm
} // namespace octopus

#endif
