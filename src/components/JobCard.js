'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, DollarSign, Briefcase, Star } from 'lucide-react'
import { formatSalary, getJobTypeColor, getExperienceColor, timeAgo } from '@/lib/utils'

export default function JobCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/jobs/${job.slug}`}>
        <div className="card p-6 h-full border border-gray-200 hover:border-primary-300 transition-all duration-300">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                {job.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {job.company}
              </p>
            </div>
            
            {/* Featured Badge */}
            {job.featured && (
              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                <Star className="w-3 h-3 fill-current" />
                <span>Featured</span>
              </div>
            )}
          </div>

          {/* Job Details */}
          <div className="space-y-3 mb-4">
            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{job.location}</span>
            </div>

            {/* Job Type & Experience */}
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}>
                {job.type.replace('-', ' ')}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(job.experience)}`}>
                {job.experience} level
              </span>
              {job.remote && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Remote
                </span>
              )}
            </div>

            {/* Salary */}
            {job.salary && (
              <div className="flex items-center space-x-2 text-gray-600">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {formatSalary(job.salary.min, job.salary.max, job.salary.currency)}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {job.description}
          </p>

          {/* Requirements Preview */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</h4>
            <div className="flex flex-wrap gap-1">
              {job.requirements.slice(0, 3).map((requirement, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {requirement}
                </span>
              ))}
              {job.requirements.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{job.requirements.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{timeAgo(job.postedDate)}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-200">
              <span>View Details</span>
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 