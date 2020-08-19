// Copyright (c) 2015-2020 Daniel Cooke
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

#ifndef measure_factory_hpp
#define measure_factory_hpp

#include <string>
#include <vector>

#include "utils/string_utils.hpp"
#include "measure.hpp"

namespace octopus { namespace csr {

MeasureWrapper make_measure(std::string name);

std::vector<MeasureWrapper> make_measures(std::vector<std::string> names);

std::vector<std::string> get_all_measure_names();

} // namespace csr
} // namespace octopus

#endif
