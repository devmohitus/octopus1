//
//  common.hpp
//  Octopus
//
//  Created by Daniel Cooke on 12/05/2015.
//  Copyright (c) 2015 Oxford University. All rights reserved.
//

#ifndef Octopus_common_hpp
#define Octopus_common_hpp

#include <string>
#include <cstdint>
#include <unordered_map>

#include "genomic_region.hpp"
#include "mappable_flat_multi_set.hpp"
#include "mappable_map.hpp"
#include "aligned_read.hpp"
#include "read_filter.hpp"

namespace Octopus
{
    extern bool DEBUG_MODE;
    
    const static std::string Octopus_version {"1.0"};
    
    using ProbabilityType = double;
    using SampleIdType    = std::string;
    
    using SearchRegions = MappableMap<GenomicRegion::ContigNameType, GenomicRegion>;
    
    using ReadContainer = MappableFlatMultiSet<AlignedRead>;
    using ReadMap       = MappableMap<SampleIdType, AlignedRead>;
    
    using ReadFilterer = ReadFilter<ReadContainer::iterator>;
}

#endif
