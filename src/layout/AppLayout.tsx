import { useState } from 'react';

import ExpandedNote from '@features/ExpendedNote/ExpandedNote';
import Search from '@features/Search/Search';
import cn from '@shared/lib/helpers/cn';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [isNoteExpanded, setIsNoteExpanded] = useState(true);

  return (
    <main
      className={cn(
        'grid h-dvh grid-cols-[300px_1fr_1fr] grid-rows-1 gap-6 p-4 text-on-surface transition-all duration-400 ease-emphasized-decelerate',
        {
          'grid-cols-[300px_1fr_0fr]': !isNoteExpanded,
        },
      )}>
      <aside className="w-[300px]">sidebar</aside>
      <div className="grid grid-rows-[64px_1fr] gap-3">
        <header className="relative">
          <Search />
        </header>
        <section>
          <Outlet context={setIsNoteExpanded} />
        </section>
      </div>
      <section className="grid grid-rows-[max-content_1fr] overflow-hidden rounded-xl transition-all">
        <ExpandedNote onExpand={setIsNoteExpanded} />
      </section>
    </main>
  );
};

export default AppLayout;
