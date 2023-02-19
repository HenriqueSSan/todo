import { $Formulary } from './containers/_Formulary';
import { $Top } from './containers/_Top';

export function Header() {
  return (
    <header>
      <div className="w-100 h-[320px] bg-header-desktop-light-image bg-cover bg-no-repeat dark:bg-header-desktop-dark-image">
        <div className="mx-auto max-w-[644px] px-6 pt-[120px]">
          <$Top />
          <$Formulary />
        </div>
      </div>
    </header>
  );
}
