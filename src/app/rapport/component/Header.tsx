import './rapportHeaderActions.css';
import ShieldIcon from './ShieldIcon';
import ColorModeIconDropdown from '@/app/shared-theme/ColorModeIconDropdown';

export default function Header() {
  return (
    <header className="rapport-header">
      <span className="rapport-header-icon">
        <ShieldIcon width={50} height={50} />
      </span>
      <div>
        <h1 className="rapport-header-title">Skaderapport System</h1>
        <div className="rapport-header-subtitle">Registrer og administrer skaderapporter</div>
      </div>
      <span className="rapport-header-theme-toggle">
        <ColorModeIconDropdown />
      </span>
    </header>
  );
}