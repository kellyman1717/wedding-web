import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Gift as GiftIcon, CreditCard } from 'lucide-react';
import { invitationData } from '../data/invitationData.js';

const BankAccount = ({ bankName, accountNumber, ownerName }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-5 rounded-xl shadow-sm mb-4 text-left w-full max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-custom-blue-dark text-white p-2 rounded-lg">
            <CreditCard size={20} /> 
        </div>
        <h4 className="font-bold font-sans text-lg text-gray-700">{bankName}</h4>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="font-mono text-xl tracking-wider text-gray-800 my-1">{accountNumber}</p>
          <p className="font-sans text-sm text-gray-600">a.n {ownerName}</p>
        </div>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1 text-sm bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md transition-all shadow-sm active:scale-95"
        >
          {copied ? <Check size={14} className="text-green-600"/> : <Copy size={14} className="text-gray-500"/>}
          <span className={copied ? "text-green-600 font-medium" : "text-gray-600"}>
            {copied ? 'Tersalin' : 'Salin'}
          </span>
        </button>
      </div>
    </div>
  );
};

const Gift = () => {
  const cdnBaseUrl = 'https://my-wedding-ec9a0.web.app/images/';
  const bankAccounts = [
    {
      bankName: "Blu by BCA",
      accountNumber: "005693250661",
      ownerName: invitationData.groomExt
    },
    {
      bankName: "Blu by BCA",
      accountNumber: "009533295421",
      ownerName: invitationData.brideExt
    }
  ];

  const qrisImage = `${cdnBaseUrl}qris-placeholder.png`;

  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-white via-blue-200 to-white text-center">
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-10">
            <div className="flex justify-center mb-4 text-custom-blue-dark">
                <GiftIcon size={48} />
            </div>
            <h2 className="font-display text-4xl text-custom-brown mb-4">Amplop Digital</h2>
        </div>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {bankAccounts.map((acc, idx) => (
                <BankAccount 
                    key={idx}
                    bankName={acc.bankName}
                    accountNumber={acc.accountNumber}
                    ownerName={acc.ownerName}
                />
            ))}
        </motion.div>
        <motion.div 
            className="mt-8 bg-white p-4 rounded-xl shadow-md inline-block max-w-xs w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
        >
            <p className="font-bold text-gray-700 mb-3">Scan QRIS</p>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                 <img src={qrisImage} alt="QRIS Code" className="w-full h-full object-contain" 
                 onError={(e) => {
                     e.target.onerror = null; 
                     e.target.parentNode.innerHTML = '<span class="text-xs text-gray-400">QRIS Image Placeholder</span>';
                 }}/>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gift;