import { CareerJobSection } from '@/components/careers/CareerJobSection'
import { getCareerJobBySlug } from '@/data/careers'
import { Navigate, useParams } from 'react-router-dom'

export function CareerJobPage() {
  const { slug } = useParams<{ slug: string }>()
  const job = slug ? getCareerJobBySlug(slug) : undefined

  if (!job) {
    return <Navigate to="/careers" replace />
  }

  return <CareerJobSection job={job} />
}
