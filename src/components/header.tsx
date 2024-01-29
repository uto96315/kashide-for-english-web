"use client";
import Cookies from 'js-cookie';
import Button from './button';
import { useRouter } from 'next/navigation';

const Header = () => {
    const userName = Cookies.get("UserName");
    const router = useRouter();
    return (
        <div className="w-full bg-pink-300 py-3 px-2">
            <div className="flex justify-between">
                <p className=" font-bold text-white">Kashide for English Study</p>
                {userName ?
                    <div className="text-white pr-4">{userName}</div>
                    : <button
                        className='bg-white text-pink-400 py-2 px-4 rounded-lg shadow hover:shadow-md hover:font-semibold'
                        onClick={() => { router.push("/login"); }}
                    >
                        ログイン
                    </button>
                }
            </div>
        </div>
    );
};

export default Header;