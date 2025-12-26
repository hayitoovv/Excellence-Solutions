import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import 'flag-icons/css/flag-icons.min.css';

const countries = [
  { code: 'AF', name: "Afg'oniston", flag: '🇦🇫', flagClass: 'fi fi-af', dialCode: '+93', mask: '00 000 0000' },
  { code: 'AL', name: 'Albaniya', flag: '🇦🇱', flagClass: 'fi fi-al', dialCode: '+355', mask: '00 000 0000' },
  { code: 'DZ', name: 'Jazoir', flag: '🇩🇿', flagClass: 'fi fi-dz', dialCode: '+213', mask: '00 000 0000' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩', flagClass: 'fi fi-ad', dialCode: '+376', mask: '000 000' },
  { code: 'UZ', name: "O'zbekiston", flagClass: 'fi fi-uz', dialCode: '+998', mask: '(00) 000-00-00' },
  { code: 'AO', name: 'Angola', flag: '🇦🇴', flagClass: 'fi fi-ao', dialCode: '+244', mask: '000 000 000' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', flagClass: 'fi fi-ar', dialCode: '+54', mask: '00 0000-0000' },
  { code: 'AM', name: 'Armaniston', flag: '🇦🇲', flagClass: 'fi fi-am', dialCode: '+374', mask: '00 000000' },
  { code: 'AU', name: 'Avstraliya', flag: '🇦🇺', flagClass: 'fi fi-au', dialCode: '+61', mask: '000 000 000' },
  { code: 'AT', name: 'Avstriya', flag: '🇦🇹', flagClass: 'fi fi-at', dialCode: '+43', mask: '000 0000000' },
  { code: 'AZ', name: 'Ozarbayjon', flag: '🇦🇿', flagClass: 'fi fi-az', dialCode: '+994', mask: '00 000 00 00' },
  { code: 'BS', name: 'Bagama orollari', flag: '🇧🇸', flagClass: 'fi fi-bs', dialCode: '+1242', mask: '000 0000' },
  { code: 'BH', name: 'Bahrayn', flag: '🇧🇭', flagClass: 'fi fi-bh', dialCode: '+973', mask: '0000 0000' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', flagClass: 'fi fi-bd', dialCode: '+880', mask: '0000 000000' },
  { code: 'BY', name: 'Belarus', flag: '🇧🇾', flagClass: 'fi fi-by', dialCode: '+375', mask: '00 000-00-00' },
  { code: 'BE', name: 'Belgiya', flag: '🇧🇪', flagClass: 'fi fi-be', dialCode: '+32', mask: '000 00 00 00' },
  { code: 'BZ', name: 'Beliz', flag: '🇧🇿', flagClass: 'fi fi-bz', dialCode: '+501', mask: '000-0000' },
  { code: 'BJ', name: 'Benin', flag: '🇧🇯', flagClass: 'fi fi-bj', dialCode: '+229', mask: '00 00 00 00' },
  { code: 'BT', name: 'Butan', flag: '🇧🇹', flagClass: 'fi fi-bt', dialCode: '+975', mask: '00 000 000' },
  { code: 'BO', name: 'Boliviya', flag: '🇧🇴', flagClass: 'fi fi-bo', dialCode: '+591', mask: '0 000 0000' },
  { code: 'BA', name: 'Bosniya va Gertsegovina', flag: '🇧🇦', flagClass: 'fi fi-ba', dialCode: '+387', mask: '00 0000' },
  { code: 'BW', name: 'Botsvana', flag: '🇧🇼', flagClass: 'fi fi-bw', dialCode: '+267', mask: '00 000 000' },
  { code: 'BR', name: 'Braziliya', flag: '🇧🇷', flagClass: 'fi fi-br', dialCode: '+55', mask: '00 00000-0000' },
  { code: 'BN', name: 'Bruney', flag: '🇧🇳', flagClass: 'fi fi-bn', dialCode: '+673', mask: '000 0000' },
  { code: 'BG', name: 'Bolgariya', flag: '🇧🇬', flagClass: 'fi fi-bg', dialCode: '+359', mask: '00 000 000' },
  { code: 'BF', name: 'Burkina-Faso', flag: '🇧🇫', flagClass: 'fi fi-bf', dialCode: '+226', mask: '00 00 00 00' },
  { code: 'BI', name: 'Burundi', flag: '🇧🇮', flagClass: 'fi fi-bi', dialCode: '+257', mask: '00 00 00 00' },
  { code: 'KH', name: 'Kambodja', flag: '🇰🇭', flagClass: 'fi fi-kh', dialCode: '+855', mask: '00 000 000' },
  { code: 'CM', name: 'Kamerun', flag: '🇨🇲', flagClass: 'fi fi-cm', dialCode: '+237', mask: '0 00 00 00 00' },
  { code: 'CA', name: 'Kanada', flag: '🇨🇦', flagClass: 'fi fi-ca', dialCode: '+1', mask: '(000) 000-0000' },
  { code: 'CV', name: 'Kabo-Verde', flag: '🇨🇻', flagClass: 'fi fi-cv', dialCode: '+238', mask: '000 00 00' },
  { code: 'CF', name: 'Markaziy Afrika Respublikasi', flag: '🇨🇫', flagClass: 'fi fi-cf', dialCode: '+236', mask: '00 00 00 00' },
  { code: 'TD', name: 'Chad', flag: '🇹🇩', flagClass: 'fi fi-td', dialCode: '+235', mask: '00 00 00 00' },
  { code: 'CL', name: 'Chili', flag: '🇨🇱', flagClass: 'fi fi-cl', dialCode: '+56', mask: '0 0000 0000' },
  { code: 'CN', name: 'Xitoy', flag: '🇨🇳', flagClass: 'fi fi-cn', dialCode: '+86', mask: '000 0000 0000' },
  { code: 'CO', name: 'Kolumbiya', flag: '🇨🇴', flagClass: 'fi fi-co', dialCode: '+57', mask: '000 0000000' },
  { code: 'KM', name: 'Komor orollari', flag: '🇰🇲', flagClass: 'fi fi-km', dialCode: '+269', mask: '00 00000' },
  { code: 'CG', name: 'Kongo', flag: '🇨🇬', flagClass: 'fi fi-cg', dialCode: '+242', mask: '00 000 0000' },
  { code: 'CR', name: 'Kosta-Rika', flag: '🇨🇷', flagClass: 'fi fi-cr', dialCode: '+506', mask: '0000 0000' },
  { code: 'HR', name: 'Xorvatiya', flag: '🇭🇷', flagClass: 'fi fi-hr', dialCode: '+385', mask: '00 000 0000' },
  { code: 'CU', name: 'Kuba', flag: '🇨🇺', flagClass: 'fi fi-cu', dialCode: '+53', mask: '0 0000000' },
  { code: 'CY', name: 'Kipr', flag: '🇨🇾', flagClass: 'fi fi-cy', dialCode: '+357', mask: '00 000000' },
  { code: 'CZ', name: 'Chexiya', flag: '🇨🇿', flagClass: 'fi fi-cz', dialCode: '+420', mask: '000 000 000' },
  { code: 'DK', name: 'Daniya', flag: '🇩🇰', flagClass: 'fi fi-dk', dialCode: '+45', mask: '00 00 00 00' },
  { code: 'DJ', name: 'Jibuti', flag: '🇩🇯', flagClass: 'fi fi-dj', dialCode: '+253', mask: '00 00 00 00' },
  { code: 'DO', name: 'Dominikan Respublikasi', flag: '🇩🇴', flagClass: 'fi fi-do', dialCode: '+1809', mask: '000 0000' },
  { code: 'EC', name: 'Ekvador', flag: '🇪🇨', flagClass: 'fi fi-ec', dialCode: '+593', mask: '00 000 0000' },
  { code: 'EG', name: 'Misr', flag: '🇪🇬', flagClass: 'fi fi-eg', dialCode: '+20', mask: '000 000 0000' },
  { code: 'SV', name: 'Salvador', flag: '🇸🇻', flagClass: 'fi fi-sv', dialCode: '+503', mask: '0000 0000' },
  { code: 'GQ', name: 'Ekvatorial Gvineya', flag: '🇬🇶', flagClass: 'fi fi-gq', dialCode: '+240', mask: '00 000 0000' },
  { code: 'ER', name: 'Eritreya', flag: '🇪🇷', flagClass: 'fi fi-er', dialCode: '+291', mask: '0 000 000' },
  { code: 'EE', name: 'Estoniya', flag: '🇪🇪', flagClass: 'fi fi-ee', dialCode: '+372', mask: '0000 0000' },
  { code: 'ET', name: 'Efiopiya', flag: '🇪🇹', flagClass: 'fi fi-et', dialCode: '+251', mask: '00 000 0000' },
  { code: 'FJ', name: 'Fiji', flag: '🇫🇯', flagClass: 'fi fi-fj', dialCode: '+679', mask: '000 0000' },
  { code: 'FI', name: 'Finlandiya', flag: '🇫🇮', flagClass: 'fi fi-fi', dialCode: '+358', mask: '00 0000000' },
  { code: 'FR', name: 'Fransiya', flag: '🇫🇷', flagClass: 'fi fi-fr', dialCode: '+33', mask: '0 00 00 00 00' },
  { code: 'GA', name: 'Gabon', flag: '🇬🇦', flagClass: 'fi fi-ga', dialCode: '+241', mask: '0 00 00 00' },
  { code: 'GM', name: 'Gambiya', flag: '🇬🇲', flagClass: 'fi fi-gm', dialCode: '+220', mask: '000 0000' },
  { code: 'GE', name: 'Gruziya', flag: '🇬🇪', flagClass: 'fi fi-ge', dialCode: '+995', mask: '000 000 000' },
  { code: 'DE', name: 'Germaniya', flag: '🇩🇪', flagClass: 'fi fi-de', dialCode: '+49', mask: '000 00000000' },
  { code: 'GH', name: 'Gana', flag: '🇬🇭', flagClass: 'fi fi-gh', dialCode: '+233', mask: '00 000 0000' },
  { code: 'GR', name: 'Gretsiya', flag: '🇬🇷', flagClass: 'fi fi-gr', dialCode: '+30', mask: '00 0000 0000' },
  { code: 'GT', name: 'Gvatemala', flag: '🇬🇹', flagClass: 'fi fi-gt', dialCode: '+502', mask: '0000 0000' },
  { code: 'GN', name: 'Gvineya', flag: '🇬🇳', flagClass: 'fi fi-gn', dialCode: '+224', mask: '00 000 000' },
  { code: 'GW', name: 'Gvineya-Bisau', flag: '🇬🇼', flagClass: 'fi fi-gw', dialCode: '+245', mask: '000 0000' },
  { code: 'GY', name: 'Gayana', flag: '🇬🇾', flagClass: 'fi fi-gy', dialCode: '+592', mask: '000 0000' },
  { code: 'HT', name: 'Gaiti', flag: '🇭🇹', flagClass: 'fi fi-ht', dialCode: '+509', mask: '00 00 0000' },
  { code: 'HN', name: 'Gonduras', flag: '🇭🇳', flagClass: 'fi fi-hn', dialCode: '+504', mask: '0000 0000' },
  { code: 'HU', name: 'Vengriya', flag: '🇭🇺', flagClass: 'fi fi-hu', dialCode: '+36', mask: '00 000 0000' },
  { code: 'IS', name: 'Islandiya', flag: '🇮🇸', flagClass: 'fi fi-is', dialCode: '+354', mask: '000 0000' },
  { code: 'IN', name: 'Hindiston', flag: '🇮🇳', flagClass: 'fi fi-in', dialCode: '+91', mask: '00000 00000' },
  { code: 'ID', name: 'Indoneziya', flag: '🇮🇩', flagClass: 'fi fi-id', dialCode: '+62', mask: '000-000-0000' },
  { code: 'IR', name: 'Eron', flag: '🇮🇷', flagClass: 'fi fi-ir', dialCode: '+98', mask: '000 000 0000' },
  { code: 'IQ', name: 'Iroq', flag: '🇮🇶', flagClass: 'fi fi-iq', dialCode: '+964', mask: '000 000 0000' },
  { code: 'IE', name: 'Irlandiya', flag: '🇮🇪', flagClass: 'fi fi-ie', dialCode: '+353', mask: '00 000 0000' },
  { code: 'IL', name: 'Isroil', flag: '🇮🇱', flagClass: 'fi fi-il', dialCode: '+972', mask: '00-000-0000' },
  { code: 'IT', name: 'Italiya', flag: '🇮🇹', flagClass: 'fi fi-it', dialCode: '+39', mask: '000 0000000' },
  { code: 'JM', name: 'Yamayka', flag: '🇯🇲', flagClass: 'fi fi-jm', dialCode: '+1876', mask: '000 0000' },
  { code: 'JP', name: 'Yaponiya', flag: '🇯🇵', flagClass: 'fi fi-jp', dialCode: '+81', mask: '00-0000-0000' },
  { code: 'JO', name: 'Iordaniya', flag: '🇯🇴', flagClass: 'fi fi-jo', dialCode: '+962', mask: '0 0000 0000' },
  { code: 'KZ', name: "Qozog'iston", flag: '🇰🇿', flagClass: 'fi fi-kz', dialCode: '+7', mask: '(000) 000-00-00' },
  { code: 'KE', name: 'Keniya', flag: '🇰🇪', flagClass: 'fi fi-ke', dialCode: '+254', mask: '000 000000' },
  { code: 'KI', name: 'Kiribati', flag: '🇰🇮', flagClass: 'fi fi-ki', dialCode: '+686', mask: '00000' },
  { code: 'KP', name: 'Shimoliy Koreya', flag: '🇰🇵', flagClass: 'fi fi-kp', dialCode: '+850', mask: '000 000 0000' },
  { code: 'KR', name: 'Janubiy Koreya', flag: '🇰🇷', flagClass: 'fi fi-kr', dialCode: '+82', mask: '00-0000-0000' },
  { code: 'KW', name: 'Quvayt', flag: '🇰🇼', flagClass: 'fi fi-kw', dialCode: '+965', mask: '0000 0000' },
  { code: 'KG', name: "Qirg'iziston", flag: '🇰🇬', flagClass: 'fi fi-kg', dialCode: '+996', mask: '000 000 000' },
  { code: 'LA', name: 'Laos', flag: '🇱🇦', flagClass: 'fi fi-la', dialCode: '+856', mask: '00 00 000 000' },
  { code: 'LV', name: 'Latviya', flag: '🇱🇻', flagClass: 'fi fi-lv', dialCode: '+371', mask: '00 000 000' },
  { code: 'LB', name: 'Livan', flag: '🇱🇧', flagClass: 'fi fi-lb', dialCode: '+961', mask: '00 000 000' },
  { code: 'LS', name: 'Lesoto', flag: '🇱🇸', flagClass: 'fi fi-ls', dialCode: '+266', mask: '0 000 0000' },
  { code: 'LR', name: 'Liberiya', flag: '🇱🇷', flagClass: 'fi fi-lr', dialCode: '+231', mask: '00 000 000' },
  { code: 'LY', name: 'Liviya', flag: '🇱🇾', flagClass: 'fi fi-ly', dialCode: '+218', mask: '00-000-0000' },
  { code: 'LI', name: 'Lixtenshteyn', flag: '🇱🇮', flagClass: 'fi fi-li', dialCode: '+423', mask: '000 0000' },
  { code: 'LT', name: 'Litva', flag: '🇱🇹', flagClass: 'fi fi-lt', dialCode: '+370', mask: '(0-000) 00000' },
  { code: 'LU', name: 'Lyuksemburg', flag: '🇱🇺', flagClass: 'fi fi-lu', dialCode: '+352', mask: '000 000 000' },
  { code: 'MG', name: 'Madagaskar', flag: '🇲🇬', flagClass: 'fi fi-mg', dialCode: '+261', mask: '00 00 000 00' },
  { code: 'MW', name: 'Malavi', flag: '🇲🇼', flagClass: 'fi fi-mw', dialCode: '+265', mask: '0 0000 0000' },
  { code: 'MY', name: 'Malayziya', flag: '🇲🇾', flagClass: 'fi fi-my', dialCode: '+60', mask: '00-000 0000' },
  { code: 'MV', name: 'Maldiv orollari', flag: '🇲🇻', flagClass: 'fi fi-mv', dialCode: '+960', mask: '000-0000' },
  { code: 'ML', name: 'Mali', flag: '🇲🇱', flagClass: 'fi fi-ml', dialCode: '+223', mask: '00 00 00 00' },
  { code: 'MT', name: 'Malta', flag: '🇲🇹', flagClass: 'fi fi-mt', dialCode: '+356', mask: '0000 0000' },
  { code: 'MH', name: 'Marshall orollari', flag: '🇲🇭', flagClass: 'fi fi-mh', dialCode: '+692', mask: '000-0000' },
  { code: 'MR', name: 'Mavritaniya', flag: '🇲🇷', flagClass: 'fi fi-mr', dialCode: '+222', mask: '00 00 00 00' },
  { code: 'MU', name: 'Mavrikiy', flag: '🇲🇺', flagClass: 'fi fi-mu', dialCode: '+230', mask: '000 0000' },
  { code: 'MX', name: 'Meksika', flag: '🇲🇽', flagClass: 'fi fi-mx', dialCode: '+52', mask: '00 0000 0000' },
  { code: 'FM', name: 'Mikroneziya', flag: '🇫🇲', flagClass: 'fi fi-fm', dialCode: '+691', mask: '000 0000' },
  { code: 'MD', name: 'Moldova', flag: '🇲🇩', flagClass: 'fi fi-md', dialCode: '+373', mask: '0000 0000' },
  { code: 'MC', name: 'Monako', flag: '🇲🇨', flagClass: 'fi fi-mc', dialCode: '+377', mask: '00 00 00 00' },
  { code: 'MN', name: "Mo'g'uliston", flag: '🇲🇳', flagClass: 'fi fi-mn', dialCode: '+976', mask: '00 00 0000' },
  { code: 'ME', name: 'Chernogoriya', flag: '🇲🇪', flagClass: 'fi fi-me', dialCode: '+382', mask: '00 000 000' },
  { code: 'MA', name: 'Marokash', flag: '🇲🇦', flagClass: 'fi fi-ma', dialCode: '+212', mask: '00-0000-000' },
  { code: 'MZ', name: 'Mozambik', flag: '🇲🇿', flagClass: 'fi fi-mz', dialCode: '+258', mask: '00 000 0000' },
  { code: 'MM', name: 'Myanma', flag: '🇲🇲', flagClass: 'fi fi-mm', dialCode: '+95', mask: '00 000 0000' },
  { code: 'NA', name: 'Namibiya', flag: '🇳🇦', flagClass: 'fi fi-na', dialCode: '+264', mask: '00 000 0000' },
  { code: 'NR', name: 'Nauru', flag: '🇳🇷', flagClass: 'fi fi-nr', dialCode: '+674', mask: '000 0000' },
  { code: 'NP', name: 'Nepal', flag: '🇳🇵', flagClass: 'fi fi-np', dialCode: '+977', mask: '00-000-0000' },
  { code: 'NL', name: 'Niderlandiya', flag: '🇳🇱', flagClass: 'fi fi-nl', dialCode: '+31', mask: '00 00000000' },
  { code: 'NZ', name: 'Yangi Zelandiya', flag: '🇳🇿', flagClass: 'fi fi-nz', dialCode: '+64', mask: '00 000 0000' },
  { code: 'NI', name: 'Nikaragua', flag: '🇳🇮', flagClass: 'fi fi-ni', dialCode: '+505', mask: '0000 0000' },
  { code: 'NE', name: 'Niger', flag: '🇳🇪', flagClass: 'fi fi-ne', dialCode: '+227', mask: '00 00 00 00' },
  { code: 'NG', name: 'Nigeriya', flag: '🇳🇬', flagClass: 'fi fi-ng', dialCode: '+234', mask: '000 000 0000' },
  { code: 'NO', name: 'Norvegiya', flag: '🇳🇴', flagClass: 'fi fi-no', dialCode: '+47', mask: '000 00 000' },
  { code: 'OM', name: 'Ummon', flag: '🇴🇲', flagClass: 'fi fi-om', dialCode: '+968', mask: '0000 0000' },
  { code: 'PK', name: 'Pokiston', flag: '🇵🇰', flagClass: 'fi fi-pk', dialCode: '+92', mask: '000 0000000' },
  { code: 'PW', name: 'Palau', flag: '🇵🇼', flagClass: 'fi fi-pw', dialCode: '+680', mask: '000 0000' },
  { code: 'PA', name: 'Panama', flag: '🇵🇦', flagClass: 'fi fi-pa', dialCode: '+507', mask: '0000-0000' },
  { code: 'PG', name: 'Papua - Yangi Gvineya', flag: '🇵🇬', flagClass: 'fi fi-pg', dialCode: '+675', mask: '000 0000' },
  { code: 'PY', name: 'Paragvay', flag: '🇵🇾', flagClass: 'fi fi-py', dialCode: '+595', mask: '000 000000' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪', flagClass: 'fi fi-pe', dialCode: '+51', mask: '000 000 000' },
  { code: 'PH', name: 'Filippin', flag: '🇵🇭', flagClass: 'fi fi-ph', dialCode: '+63', mask: '000 000 0000' },
  { code: 'PL', name: 'Polsha', flag: '🇵🇱', flagClass: 'fi fi-pl', dialCode: '+48', mask: '00 000 00 00' },
  { code: 'PT', name: 'Portugaliya', flag: '🇵🇹', flagClass: 'fi fi-pt', dialCode: '+351', mask: '00 000 0000' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦', flagClass: 'fi fi-qa', dialCode: '+974', mask: '0000 0000' },
  { code: 'RO', name: 'Ruminiya', flag: '🇷🇴', flagClass: 'fi fi-ro', dialCode: '+40', mask: '00 000 0000' },
  { code: 'RU', name: 'Rossiya', flag: '🇷🇺', flagClass: 'fi fi-ru', dialCode: '+7', mask: '(000) 000-00-00' },
  { code: 'RW', name: 'Ruanda', flag: '🇷🇼', flagClass: 'fi fi-rw', dialCode: '+250', mask: '000 000 000' },
  { code: 'KN', name: 'Sent-Kits va Nevis', flag: '🇰🇳', flagClass: 'fi fi-kn', dialCode: '+1869', mask: '000 0000' },
  { code: 'LC', name: 'Sent-Lyusiya', flag: '🇱🇨', flagClass: 'fi fi-lc', dialCode: '+1758', mask: '000 0000' },
  { code: 'VC', name: 'Sent-Vinsent va Grenadinlar', flag: '🇻🇨', flagClass: 'fi fi-vc', dialCode: '+1784', mask: '000 0000' },
  { code: 'WS', name: 'Samoa', flag: '🇼🇸', flagClass: 'fi fi-ws', dialCode: '+685', mask: '00 0000' },
  { code: 'SM', name: 'San-Marino', flag: '🇸🇲', flagClass: 'fi fi-sm', dialCode: '+378', mask: '0000 000000' },
  { code: 'ST', name: 'San-Tome va Prinsipi', flag: '🇸🇹', flagClass: 'fi fi-st', dialCode: '+239', mask: '00 00000' },
  { code: 'SA', name: 'Saudiya Arabistoni', flag: '🇸🇦', flagClass: 'fi fi-sa', dialCode: '+966', mask: '00 000 0000' },
  { code: 'SN', name: 'Senegal', flag: '🇸🇳', flagClass: 'fi fi-sn', dialCode: '+221', mask: '00 000 00 00' },
  { code: 'RS', name: 'Serbiya', flag: '🇷🇸', flagClass: 'fi fi-rs', dialCode: '+381', mask: '00 0000000' },
  { code: 'SC', name: 'Seyshel orollari', flag: '🇸🇨', flagClass: 'fi fi-sc', dialCode: '+248', mask: '0 000 000' },
  { code: 'SL', name: 'Syerra-Leone', flag: '🇸🇱', flagClass: 'fi fi-sl', dialCode: '+232', mask: '00 000000' },
  { code: 'SG', name: 'Singapur', flag: '🇸🇬', flagClass: 'fi fi-sg', dialCode: '+65', mask: '0000 0000' },
  { code: 'SK', name: 'Slovakiya', flag: '🇸🇰', flagClass: 'fi fi-sk', dialCode: '+421', mask: '000 000 000' },
  { code: 'SI', name: 'Sloveniya', flag: '🇸🇮', flagClass: 'fi fi-si', dialCode: '+386', mask: '00 000 000' },
  { code: 'SB', name: 'Solomon orollari', flag: '🇸🇧', flagClass: 'fi fi-sb', dialCode: '+677', mask: '00000' },
  { code: 'SO', name: 'Somali', flag: '🇸🇴', flagClass: 'fi fi-so', dialCode: '+252', mask: '0 000 000' },
  { code: 'ZA', name: 'Janubiy Afrika', flag: '🇿🇦', flagClass: 'fi fi-za', dialCode: '+27', mask: '00 000 0000' },
  { code: 'SS', name: 'Janubiy Sudan', flag: '🇸🇸', flagClass: 'fi fi-ss', dialCode: '+211', mask: '00 000 0000' },
  { code: 'ES', name: 'Ispaniya', flag: '🇪🇸', flagClass: 'fi fi-es', dialCode: '+34', mask: '000 00 00 00' },
  { code: 'LK', name: 'Shri-Lanka', flag: '🇱🇰', flagClass: 'fi fi-lk', dialCode: '+94', mask: '00 000 0000' },
  { code: 'SD', name: 'Sudan', flag: '🇸🇩', flagClass: 'fi fi-sd', dialCode: '+249', mask: '00 000 0000' },
  { code: 'SR', name: 'Surinam', flag: '🇸🇷', flagClass: 'fi fi-sr', dialCode: '+597', mask: '000-0000' },
  { code: 'SE', name: 'Shvetsiya', flag: '🇸🇪', flagClass: 'fi fi-se', dialCode: '+46', mask: '00 000 0000' },
  { code: 'CH', name: 'Shveytsariya', flag: '🇨🇭', flagClass: 'fi fi-ch', dialCode: '+41', mask: '00 000 00 00' },
  { code: 'SY', name: 'Suriya', flag: '🇸🇾', flagClass: 'fi fi-sy', dialCode: '+963', mask: '00 0000 000' },
  { code: 'TW', name: 'Tayvan', flag: '🇹🇼', flagClass: 'fi fi-tw', dialCode: '+886', mask: '0000 000 000' },
  { code: 'TJ', name: 'Tojikiston', flag: '🇹🇯', flagClass: 'fi fi-tj', dialCode: '+992', mask: '00 000 0000' },
  { code: 'TZ', name: 'Tanzaniya', flag: '🇹🇿', flagClass: 'fi fi-tz', dialCode: '+255', mask: '00 000 0000' },
  { code: 'TH', name: 'Tailand', flag: '🇹🇭', flagClass: 'fi fi-th', dialCode: '+66', mask: '00 000 0000' },
  { code: 'TL', name: 'Sharqiy Timor', flag: '🇹🇱', flagClass: 'fi fi-tl', dialCode: '+670', mask: '000 0000' },
  { code: 'TG', name: 'Togo', flag: '🇹🇬', flagClass: 'fi fi-tg', dialCode: '+228', mask: '00 00 00 00' },
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Default sifatida "O'zbekiston"ni tanlash
  const uzCountry = countries.find(c => c.code === 'UZ') || countries[0];
  const [selectedCountry, setSelectedCountry] = useState(uzCountry);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneDigits = phone.replace(/\D/g, '');
    return phoneDigits.length >= 9 && phoneDigits.length <= 15;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!validateName(formData.name)) {
      newErrors.name = "Ism kamida 2 ta harfdan iborat bo'lishi kerak";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email manzili noto'g'ri formatda";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Telefon raqami noto'g'ri formatda";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Xabar kamida 10 ta belgidan iborat bo'lishi kerak";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.phone && !newErrors.message;
  };

 const handleSubmit = async () => {
  if (!validateForm()) return;

  // Telefon raqamini to'liq formatda tayyorlash
  const phoneValue = formData.phone || '';
  const fullPhone = phoneValue ? `${selectedCountry.dialCode}${phoneValue}` : '';

  const submitData = {
    fullName: formData.name,
    email: formData.email,
    phone: fullPhone,
    message: formData.message,
    country: selectedCountry.name,
    countryCode: selectedCountry.code,
  };

  try {
    const response = await fetch("http://localhost:8081/api/submit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    });

    if (response.ok) {
      alert("Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
      onClose();
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
    } else {
      const errorData = await response.json().catch(() => ({}));
      const errorMsg =
        errorData.message ||
        "Xabarni yuborishda xatolik yuz berdi. Iltimos, keyinroq qaytadan urinib ko'ring.";
      alert(errorMsg);
    }
  } catch (error) {
    console.error('Network error:', error);
    alert("Tarmoqda xatolik yuz berdi. Internet aloqangizni tekshiring.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

 const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;

  // Tanlangan davlatning dialCode ni escape qilish
  const escapedDialCode = selectedCountry.dialCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // DialCode va undan keyingi probellarni olib tashlash
  let cleanedValue = value.replace(new RegExp(`^${escapedDialCode}\\s*`), '');

  // Faqat raqamlarni qoldirish
  cleanedValue = cleanedValue.replace(/\D/g, '');

  setFormData((prev) => ({ ...prev, phone: cleanedValue }));

  if (errors.phone) {
    setErrors((prev) => ({ ...prev, phone: '' }));
  }
};

  const formatPhoneDisplay = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    const mask = selectedCountry.mask;
    let formatted = '';
    let digitIndex = 0;

    for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
      if (mask[i] === '0') {
        formatted += digits[digitIndex];
        digitIndex++;
      } else {
        formatted += mask[i];
      }
    }

    return formatted;
  };

  // === YANGI: Saralash va prioritet ro'yxat ===
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.localeCompare(b.name, 'uz', { sensitivity: 'base' })
  );

  const filteredCountries = (() => {
    if (!searchTerm.trim()) {
      // Qidiruv yo'q: tanlangan davlat birinchi, keyin alifbo tartibida
      return [
        selectedCountry,
        ...sortedCountries.filter(c => c.code !== selectedCountry.code)
      ];
    }

    // Qidiruv mavjud: mos keluvchilar, lekin tanlangan davlat birinchi
    const matches = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.dialCode.includes(searchTerm)
    );

    // Tanlangan davlatni birinchi o'rinda qo'yish
    const selectedMatch = matches.find(c => c.code === selectedCountry.code);
    if (selectedMatch) {
      return [selectedMatch, ...matches.filter(c => c.code !== selectedCountry.code)];
    }

    return matches;
  })();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-60 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto contact-modal animate-slideUp">
        <button
          onClick={() => {
            onClose();
            setErrors({ name: '', email: '', phone: '', message: '' });
            setShowCountryDropdown(false);
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors hover:rotate-90 duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Biz bilan bog'laning</h2>

        <div className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ism-sharifingiz <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ismingizni kiriting"
              style={{ color: '#1F2937', fontSize: '16px' }}
              className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              style={{ color: '#1F2937', fontSize: '16px' }}
              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
            {formData.email && validateEmail(formData.email) && !errors.email && (
              <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Email to'g'ri formatda
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon
            </label>
            <div className="flex gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white min-w-[100px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className={`${selectedCountry.flagClass} fi-2x`} />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-xl z-50 w-80 max-h-96 overflow-hidden">
                    <div className="p-3 border-b border-gray-200 bg-gray-50 sticky top-0">
                      <div className="relative">
                        <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Qidirish..."
                          style={{ color: '#1F2937', fontSize: '14px' }}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm bg-white"
                        />
                      </div>
                    </div>

                    <div className="overflow-y-auto max-h-80">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryDropdown(false);
                              setSearchTerm('');
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left ${
                              selectedCountry.code === country.code ? 'bg-blue-50' : ''
                            }`}
                          >
                            <span className={`${country.flagClass} fi-1x`} />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">
                                {country.name} ({country.dialCode})
                              </div>
                            </div>
                            {selectedCountry.code === country.code && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-8 text-center text-gray-500 text-sm">
                          Davlat topilmadi
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <input
                type="tel"
                value={selectedCountry.dialCode + ' ' + formatPhoneDisplay(formData.phone)}
                onChange={handlePhoneChange}
                placeholder={`${selectedCountry.dialCode} ${selectedCountry.mask}`}
                style={{ color: '#1F2937', fontSize: '16px' }}
                className={`flex-1 px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
            {formData.phone && validatePhone(formData.phone) && !errors.phone && (
              <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Telefon to'g'ri formatda
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Savolingiz / Ariza / Taklif <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Xabaringizni shu yerga yozing..."
              rows={4}
              maxLength={500}
              style={{ color: '#1F2937', fontSize: '16px' }}
              className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none bg-white`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message ? (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              ) : (
                <span className="text-xs text-gray-500">{formData.message.length} / 500 belgi</span>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Yuborish
            <Send className="w-5 h-5" />
          </button>
        </div>
        <style>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-slideUp {
    animation: slideUp 0.3s ease-out;
  }

  /* 👇 Skroll bar ni yashirish */
  .contact-modal::-webkit-scrollbar {
    display: none;
  }

  .contact-modal {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
      </div>
    </div>
  );
}