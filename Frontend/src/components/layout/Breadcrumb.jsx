import { useLocation } from 'react-router-dom';

// Helper function to convert path segments to readable labels
const formatLabel = (segment) => {
  // Replace hyphens with spaces and capitalize each word
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const Breadcrumb = () => {
  const location = useLocation();
  
  // Split the pathname into segments, filter out empty segments
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Create breadcrumb items dynamically
  const items = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = formatLabel(segment);
    const active = index === pathSegments.length - 1; // Last segment is active

    return { label, path, active };
  });

  // Add a "Home" item at the beginning
  items.unshift({ label: 'Home', path: '/', active: false });

  return (
    <div className="px-8 py-4 text-sm text-gray-600">
      {items.map((item, index) => (
        <span key={index}>
          <span className={item.active ? 'text-orange-500' : ''}>
            {item.label}
          </span>
          {index < items.length - 1 && <span className="mx-2">{'>'}</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;