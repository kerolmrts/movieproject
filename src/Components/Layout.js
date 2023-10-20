import React from 'react';

function Layout ({ children }){
    return(
        <div className="h-full min-h-screen bg-zinc-900 text-zinc-50 overflow-x-hidden">
            
                {children}
            </div>
    
    );
}

export default Layout;