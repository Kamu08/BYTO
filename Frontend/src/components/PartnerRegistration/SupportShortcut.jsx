import Button from '../common/Button';
import { LifeBuoy } from 'lucide-react';

const SupportShortcut = () => (
  <section className="py-8 px-6">
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <Button variant="secondary">
        <LifeBuoy className="mr-2 w-5 h-5" />
        Need Help?
      </Button>
      <a href="#" className="text-[#ff914d] hover:underline">
        Partner FAQs
      </a>
    </div>
  </section>
);

export default SupportShortcut;