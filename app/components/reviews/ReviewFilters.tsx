'use client';

import { motion } from 'framer-motion';
import { 
  Filter, 
  SortDesc, 
  Search, 
  Calendar,
  Star,
  Building,
  Home,
  Cloud,
  Droplets,
  Shield,
  X,
  ChevronDown
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ReviewFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  onSortChange: (sort: SortOption) => void;
  onSearchChange: (search: string) => void;
  totalReviews: number;
  filteredCount: number;
  services: string[];
  platforms: string[];
}

export interface FilterState {
  service: string;
  rating: number | null;
  platform: string;
  dateRange: string;
  verified: boolean | null;
}

export type SortOption = 'recent' | 'helpful' | 'rating_high' | 'rating_low' | 'oldest';

const serviceIcons: Record<string, JSX.Element> = {
  'All': <Filter className="w-4 h-4" />,
  'Residential': <Home className="w-4 h-4" />,
  'Commercial': <Building className="w-4 h-4" />,
  'Storm Damage': <Cloud className="w-4 h-4" />,
  'Gutters': <Droplets className="w-4 h-4" />,
  'Siding': <Shield className="w-4 h-4" />,
};

const dateRanges = [
  { value: 'all', label: 'All Time' },
  { value: 'week', label: 'Past Week' },
  { value: 'month', label: 'Past Month' },
  { value: '3months', label: 'Past 3 Months' },
  { value: '6months', label: 'Past 6 Months' },
  { value: 'year', label: 'Past Year' },
];

const sortOptions = [
  { value: 'recent', label: 'Most Recent', icon: <Calendar className="w-4 h-4" /> },
  { value: 'helpful', label: 'Most Helpful', icon: <SortDesc className="w-4 h-4" /> },
  { value: 'rating_high', label: 'Highest Rated', icon: <Star className="w-4 h-4" /> },
  { value: 'rating_low', label: 'Lowest Rated', icon: <Star className="w-4 h-4" /> },
  { value: 'oldest', label: 'Oldest First', icon: <Calendar className="w-4 h-4" /> },
];

export default function ReviewFilters({
  onFilterChange,
  onSortChange,
  onSearchChange,
  totalReviews,
  filteredCount,
  services,
  platforms
}: ReviewFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    service: 'All',
    rating: null,
    platform: 'All',
    dateRange: 'all',
    verified: null
  });
  
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Count active filters
    let count = 0;
    if (filters.service !== 'All') count++;
    if (filters.rating !== null) count++;
    if (filters.platform !== 'All') count++;
    if (filters.dateRange !== 'all') count++;
    if (filters.verified !== null) count++;
    if (searchQuery) count++;
    setActiveFiltersCount(count);
  }, [filters, searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterUpdate = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortUpdate = (value: SortOption) => {
    setSortBy(value);
    onSortChange(value);
    setShowSortDropdown(false);
  };

  const handleSearchUpdate = (value: string) => {
    setSearchQuery(value);
    onSearchChange(value);
  };

  const clearAllFilters = () => {
    const resetFilters: FilterState = {
      service: 'All',
      rating: null,
      platform: 'All',
      dateRange: 'all',
      verified: null
    };
    setFilters(resetFilters);
    setSearchQuery('');
    onFilterChange(resetFilters);
    onSearchChange('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-20 z-20"
    >
      {/* Top Row: Search and Sort */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchUpdate(e.target.value)}
              placeholder="Search reviews..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-weather-teal focus:border-transparent transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchUpdate('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative" ref={sortDropdownRef}>
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors min-w-[180px]"
          >
            <SortDesc className="w-5 h-5 text-gray-600" />
            <span className="font-medium">
              {sortOptions.find(o => o.value === sortBy)?.label}
            </span>
            <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showSortDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-xl border z-30"
            >
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleSortUpdate(option.value as SortOption)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                    sortBy === option.value ? 'bg-weather-teal/10 text-weather-teal' : ''
                  }`}
                >
                  {option.icon}
                  <span>{option.label}</span>
                  {sortBy === option.value && (
                    <div className="ml-auto w-2 h-2 bg-weather-teal rounded-full" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Advanced Filters Toggle */}
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
            showAdvancedFilters 
              ? 'bg-weather-teal text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-sm">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Service Type Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['All', ...services].map(service => (
          <motion.button
            key={service}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterUpdate('service', service)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              filters.service === service
                ? 'bg-weather-teal text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {serviceIcons[service]}
            <span>{service}</span>
          </motion.button>
        ))}
      </div>

      {/* Advanced Filters Panel */}
      {showAdvancedFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t pt-4 mt-4"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Rating Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Minimum Rating
              </label>
              <div className="flex gap-1">
                {[5, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => handleFilterUpdate('rating', filters.rating === rating ? null : rating)}
                    className={`flex-1 py-2 rounded-lg border transition-all duration-300 ${
                      filters.rating === rating
                        ? 'bg-weather-teal text-white border-weather-teal'
                        : 'bg-white border-gray-200 hover:border-weather-teal'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-sm">{rating}</span>
                      <Star className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Platform
              </label>
              <select
                value={filters.platform}
                onChange={(e) => handleFilterUpdate('platform', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-weather-teal"
              >
                <option value="All">All Platforms</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Date Range
              </label>
              <select
                value={filters.dateRange}
                onChange={(e) => handleFilterUpdate('dateRange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-weather-teal"
              >
                {dateRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Verified Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Verification
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleFilterUpdate('verified', filters.verified === true ? null : true)}
                  className={`flex-1 py-2 px-3 rounded-lg border transition-all duration-300 ${
                    filters.verified === true
                      ? 'bg-weather-teal text-white border-weather-teal'
                      : 'bg-white border-gray-200 hover:border-weather-teal'
                  }`}
                >
                  Verified
                </button>
                <button
                  onClick={() => handleFilterUpdate('verified', filters.verified === false ? null : false)}
                  className={`flex-1 py-2 px-3 rounded-lg border transition-all duration-300 ${
                    filters.verified === false
                      ? 'bg-weather-teal text-white border-weather-teal'
                      : 'bg-white border-gray-200 hover:border-weather-teal'
                  }`}
                >
                  All
                </button>
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Showing {filteredCount} of {totalReviews} reviews
              </span>
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium"
              >
                <X className="w-4 h-4" />
                Clear All Filters
              </button>
            </div>
          )}
        </motion.div>
      )}

      {/* Results Summary */}
      {!showAdvancedFilters && filteredCount !== totalReviews && (
        <div className="text-sm text-gray-600 mt-2">
          Showing {filteredCount} of {totalReviews} reviews
        </div>
      )}
    </motion.div>
  );
}