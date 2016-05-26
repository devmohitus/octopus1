//
//  population_genotype_model.hpp
//  Octopus
//
//  Created by Daniel Cooke on 26/08/2015.
//  Copyright (c) 2015 Oxford University. All rights reserved.
//

#ifndef __Octopus__population_genotype_model__
#define __Octopus__population_genotype_model__

#include <vector>
#include <unordered_map>
#include <functional>

#include "common.hpp"
#include "haplotype.hpp"
#include "coalescent_model.hpp"
#include "haplotype_likelihood_cache.hpp"
#include "genotype.hpp"
#include "probability_matrix.hpp"
#include "logging.hpp"

namespace Octopus
{
    namespace GenotypeModel
    {
        class Population
        {
        public:
            struct Latents
            {
                using GenotypeProbabilityVector       = std::vector<double>;
                using SampleGenotypeProbabilityVector = std::vector<GenotypeProbabilityVector>;
                
                Latents() = default;
                Latents(SampleGenotypeProbabilityVector&& genotype_probabilities);
                ~Latents() = default;
                
                SampleGenotypeProbabilityVector genotype_probabilities;
            };
            
            struct InferredLatents
            {
                using HaplotypeReference    = std::reference_wrapper<const Haplotype>;
                using HaplotypePosteriorMap = std::unordered_map<HaplotypeReference, double>;
                
                InferredLatents() = default;
                InferredLatents(Latents&& posteriors, HaplotypePosteriorMap&& haplotype_posteriors,
                                double log_evidence);
                
                Latents posteriors;
                HaplotypePosteriorMap haplotype_posteriors;
                double log_evidence;
            };
            
            using GenotypeVector = std::vector<Genotype<Haplotype>>;
            
            Population() = delete;
            
            Population(const CoalescentModel& genotype_prior_model);
            
            ~Population() = default;
            
            Population(const Population&)            = delete;
            Population& operator=(const Population&) = delete;
            Population(Population&&)                 = delete;
            Population& operator=(Population&&)      = delete;
            
            InferredLatents
            infer_latents(const std::vector<SampleIdType>& samples, const GenotypeVector& genotypes,
                          const std::vector<Haplotype>& haplotypes,
                          const HaplotypeLikelihoodCache& haplotype_likelihoods) const;
            
//            InferredLatents
//            infer_latents(const std::unordered_map<SampleIdType, GenotypeVector>& genotypes,
//                          const HaplotypeLikelihoodCache& haplotype_likelihoods) const;
            
        private:
            std::reference_wrapper<const CoalescentModel> genotype_prior_model_;
        };
    } // namesapce GenotypeModel
} // namespace Octopus

#endif /* defined(__Octopus__population_genotype_model__) */
