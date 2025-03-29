import PropTypes from 'prop-types'
import Header from '@/components/Header' // Ensure this points to the correct Header component file

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* The header remains at the top */}
      <div className="container mx-auto flex-1 py-10">
        {children} {/* This renders any child components passed into <Layouts> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

