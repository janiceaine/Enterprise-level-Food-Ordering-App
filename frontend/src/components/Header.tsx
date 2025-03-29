import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <div>
      <div className="border-b-2 border-b-green-500 py-6">
        <div className="container mx-auto flex items-center justify-between">
            
            <Link 
                to="/" 
                className="text-3xl font-bold tracking-tight text-green-500">
                    LetsEat.com
            </Link>

            <div className="md:hidden">
                <MobileNav /> {/* Mobile navigation component */}
            </div>
            
        </div>
      </div>
    </div>
  )
}
