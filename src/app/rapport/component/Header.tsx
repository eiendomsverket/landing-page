import './rapportHeaderActions.css';
import ShieldIcon from './ShieldIcon';

export default function Header() {
  return (
    <header className="rapport-header rapport-header--white">
      <span className="rapport-header-icon">
        <ShieldIcon width={50} height={50} />
      </span>
      <span className="rapport-header-title">Tilstandsrapporter</span>
    </header>
  );
}