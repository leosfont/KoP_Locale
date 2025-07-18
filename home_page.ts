/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LOCALE } from 'lang/locales'

export const home_page: { [key in LOCALE]?: { [key in string]: string } } = {
  [LOCALE.LOGIN_AS_GUEST]: {
    en: 'Login as Guest',
    ru: 'Войти как гость',
    cz: 'Přihlaste se jako host',
    zh: '以訪客身份登入',
    fr: "Se connecter en tant qu'invité",
    br: 'Entrar como convidado',
    vi: 'Đăng nhập dưới dạng khách',
    id: 'Masuk sebagai Tamu',
  },
  [LOCALE.LOGIN_LINK_CODE]: {
    en: 'Login with Link Code',
    ru: 'Войти с кодом ссылки',
    cz: 'Přihlaste se pomocí kódu odkazu',
    zh: '使用連結代碼登入',
    fr: 'Se connecter avec un code de lien',
    br: 'Entrar com código de link',
    vi: 'Đăng nhập bằng mã liên kết',
    id: 'Masuk dengan Kode Tautan',
  },
  [LOCALE.LOGIN_OTHER_METHODS]: {
    en: 'Login with Other Methods',
    ru: 'Войти с другими методами',
    cz: 'Přihlaste se pomocí jiných metod',
    zh: '使用其他方法登入',
    fr: "Se connecter avec d'autres méthodes",
    br: 'Entrar com outros métodos',
    vi: 'Đăng nhập bằng các phương pháp khác',
    id: 'Masuk dengan Metode Lainnya',
  },
  [LOCALE.USERNAME]: {
    en: 'Username',
    ru: 'Имя пользователя',
    cz: 'Uživatelské jméno',
    zh: '用戶名',
    fr: "Nom d'utilisateur",
    br: 'Nome de usuário',
    vi: 'Tên người dùng',
    id: 'Nama Pengguna',
  },
  [LOCALE.LINK_CODE]: {
    en: 'Link Code',
    ru: 'Код ссылки',
    cz: 'Kód odkazu',
    zh: '連結代碼',
    fr: 'Code de lien',
    br: 'Código de link',
    vi: 'Mã liên kết',
    id: 'Kode Tautan',
  },
  [LOCALE.SELECT_REGION]: {
    en: 'Select Region',
    ru: 'Выбрать регион',
    cz: 'Vybrat region ',
    zh: '選擇地區',
    fr: 'Sélectionner une région',
    br: 'Selecione a região',
    vi: 'Chọn Khu vực',
    id: 'Pilih Wilayah',
  },
  [LOCALE.SERVER]: {
    en: 'Server',
    ru: 'Сервер',
    cz: 'Server',
    zh: '伺服器',
    fr: 'Serveur',
    br: 'Servidor',
    vi: 'Máy chủ',
    id: 'Server',
  },
  [LOCALE.PING]: {
    en: 'Ping',
    ru: 'Пинг',
    zh: '延遲',
  },
  [LOCALE.DISCORD]: {
    en: 'Discord',
    // Discord in Russian
    ru: 'Дискорд',
  },
  [LOCALE.TERMS_OF_SERVICES]: {
    en: 'Terms of Service',
    ru: 'Условия использования',
    cz: 'Podmínky služby',
    zh: '服務條款',
    fr: "Conditions d'utilisation",
    br: 'Termos de serviço',
    vi: 'Điều khoản Dịch vụ',
    id: 'Syarat Layanan',
  },
  [LOCALE.PRIVACY_POLICY]: {
    en: 'Privacy Policy',
    ru: 'Политика конфиденциальности',
    cz: 'Zásady ochrany',
    zh: '隐私政策',
    fr: 'Politique de confidentialité',
    br: 'Política de privacidade',
    vi: 'Chính sách Bảo mật',
    id: 'Kebijakan Privasi',
  },
  [LOCALE.PARTNERS]: {
    en: 'Partners',
    ru: 'Партнёры',
    cz: 'Partneři',
    zh: '合作伙伴',
    fr: 'Partenaires',
    br: 'Parceiros',
    vi: 'Đối tác',
    id: 'Mitra',
  },
  [LOCALE.SOCIAL]: {
    en: 'Social',
    ru: 'Социальные сети',
    cz: 'Sociální sítě',
    zh: '社交',
    fr: 'Social',
    br: 'Social',
    vi: 'Xã hội',
    id: 'Sosial',
  },
  [LOCALE.INFORMATIONS]: {
    en: 'Information',
    ru: 'Информация',
    cz: 'Informace',
    zh: '資訊',
    fr: 'Informations',
    br: 'Informações',
    vi: 'Thông tin',
    id: 'Informasi',
  },
  [LOCALE.LOGIN_AS]: {
    en: 'Login as',
    ru: 'Войти как',
    cz: 'Přihlásit se jako',
    zh: '登入方式',
    fr: 'Se connecter en tant que',
    br: 'Entrar como',
    vi: 'Đăng nhập như',
    id: 'Masuk sebagai',
  },
  [LOCALE.RENAME_ERROR_ALREADY_EXISTS]: {
    en: 'Name is already taken. Select another one!',
    ru: 'Это имя уже занято. Выберите другое!',
    cz: 'Toto jméno je již obsazeno. Vyberte jiné!',
    zh: '此名稱已有人使用，請另外取名！',
    fr: 'Le nom est déjà pris. Sélectionnez-en un autre!',
    br: 'Nome já está em uso. Selecione outro!',
    vi: 'Tên đã được sử dụng. Chọn một cái khác!',
    id: 'Nama sudah digunakan. Pilih yang lain!',
  },
  [LOCALE.RENAME_ERROR_INCORRECT_NAME]: {
    en: 'The name must be between 3 and 12 letters long and cannot contain forbidden letters.',
    ru: 'Имя должно быть от 3 до 12 букв и не должно содержать запрещенных символов.',
    cz: 'Jméno musí být dlouhé 3 až 12 písmen a nesmí obsahovat zakázané znaky.',
    zh: '名稱必須介於3到12個字母之間，且不能包含禁用文字。',
    fr: 'Le nom doit comporter entre 3 et 12 lettres et ne peut pas contenir de lettres interdites.',
    br: 'O nome deve ter entre 3 e 12 letras e não pode conter letras proibidas.',
    vi: 'Tên phải từ 3 đến 12 chữ cái và không được chứa chữ cái bị cấm.',
    id: 'Nama harus terdiri dari 3 hingga 12 huruf dan tidak boleh mengandung huruf yang dilarang.',
  },
  [LOCALE.RENAME_ERROR_NO_CONNECTION]: {
    en: "Can't connect with server",
    ru: 'Нет соединения с сервером',
    cz: 'Nelze se připojit k serveru',
    zh: '無法連接到伺服器',
    fr: 'Impossible de se connecter au serveur',
    br: 'Não é possível conectar-se ao servidor',
    vi: 'Không thể kết nối với máy chủ',
    id: 'Tidak dapat terhubung dengan server',
  },
  [LOCALE.LOADING]: {
    en: 'Loading...',
    ru: 'Загрузка...',
    cz: 'Načítá se...',
    zh: '載入中…',
    fr: 'Chargement...',
    br: 'Carregando...',
    vi: 'Đang tải...',
    id: 'Memuat...',
  },
  [LOCALE.CONGRATULATION]: {
    en: 'Congratulations',
    ru: 'Поздравляем',
    cz: 'Gratuluji',
    zh: '恭喜！',
    fr: 'Félicitations',
    br: 'Parabéns',
    vi: 'Chúc mừng',
    id: 'Selamat',
  },
  [LOCALE.PLAY_PAGE_RANKED_DESCRIPTION]: {
    en: ' - Reward: experience, coins and ELO\n - <b>+25% experience and coins</b>\n - Rank based matchmaking',
    ru: ' - Награды: опыт, монеты и Очки рейтинга\n - <b>+25% к получаемому опыту и монетам</b>\n - Подбор на основе ранга',
    cz: ' - Odměna: zkušenosti, mince a ELO\n - <b>+25% více zkušeností a mincí</b>\n - Dohazování na základě hodnocení',
    zh: ' - 獎勵：經驗值、金錢和ELO值\n - <b>+25% 經驗值和金錢</b>',
    fr: " - Récompense : expérience, pièces et ELO\n - <b>+25% d'expérience et de pièces</b>\n - Matchmaking basé sur le rang\n - 2 vs 2 seulement",
    br: ' - Recompensa: experiência, moedas e ELO\n - <b>+25% de experiência e moedas</b>\n - Matchmaking baseado em classificação',
    vi: ' - Phần thưởng: kinh nghiệm, xu và ELO\n - <b>+25% kinh nghiệm và xu</b>\n - Xếp hạng dựa trên kỹ năng',
    id: ' - Hadiah: pengalaman, koin, dan ELO\n - <b>+25% pengalaman dan koin</b>\n - Peringkat berdasarkan peringkat',
  },
  [LOCALE.PLAY_PAGE_UNRANKED_DESCRIPTION]: {
    en: ' - Reward: experience and coins',
    ru: ' - Награды: опыт и монеты',
    cz: ' - Odměna: zkušenosti a mince',
    zh: ' - 獎勵：經驗值和硬幣',
    fr: ' - Récompense : expérience et pièces',
    br: ' - Recompensa: experiência e moedas',
    vi: ' - Phần thưởng: kinh nghiệm và xu',
    id: ' - Hadiah: pengalaman dan koin',
  },
  [LOCALE.PLAY_PAGE_BLITZ_DESCRIPTION]: {
    en: ' - Score 15 points in under 5 minutes to win\n - Kills: 1 point, Gold Rune: 3 points, Tower: 6 points\n - 50% less experience and coins',
    ru: ' - Наберите 15 очков менее чем за 5 минут, чтобы победить\n - Убийства: 1 очко, Золотая руна: 3 очка, Башня: 6 очков\n - На 50% меньше получаемого опыта и монет',
    cz: ' - Získejte 15 bodů za méně než 5 minut pro výhru\n - Zabití: 1 bod, Zlatá runa: 3 body, Věž: 6 bodů\n - o 50% méně zkušeností a mincí',
    zh: ' - 在5分鐘内得15分獲勝\n - 擊殺：1分，黃金符文：3分，城池：6分\n - 减少 50% 的經驗值和金幣',
    fr: " - Marquez 15 points en moins de 5 minutes pour gagner\n - Tués: 1 point, Rune d'or: 3 points, Tour: 6 points\n - 50% d'expérience et de pièces en moins",
    br: ' - Ao fazer 15 pontos em menos de 5 minutos, sua equipe vence\n - Abates: 1 ponto, Runa de Ouro: 3 pontos e Torre: 6 pontos\n - 50% menos experiência e moedas',
    vi: ' - Đạt 15 điểm trong vòng dưới 5 phút để chiến thắng\n - Hạ gục: 1 điểm, Runa Vàng: 3 điểm, Tháp: 6 điểm\n - 50% ít kinh nghiệm và xu',
    id: ' - Kumpulkan 15 poin dalam waktu kurang dari 5 menit untuk menang\n - Membunuh: 1 poin, Rune Emas: 3 poin, Menara: 6 poin\n - 50% kurang pengalaman dan koin',
  },
  [LOCALE.PLAY_PAGE_2VAI_DESCRIPTION]: {
    en: ' - Reward: experience and coins\n - 25% less experience and coins',
    ru: ' - Награды: опыт и монеты\n - На 25% меньше получаемого опыта и монет',
    cz: ' - Odměna: zkušenosti a mince\n - o 25 % méně zkušeností a mincí',
    zh: ' - 獎勵：經驗值和金幣\n - 减少 25% 的經驗值和金幣',
    fr: " - Récompense : expérience et pièces\n - 25% d'expérience et de pièces en moins",
    br: ' - Recompensa: experiência e moedas\n - 25% menos experiência e moedas',
    vi: ' - Phần thưởng: kinh nghiệm và xu\n - 25% ít kinh nghiệm và xu',
    id: ' - Hadiah: pengalaman dan koin\n - 25% kurang pengalaman dan koin',
  },
  [LOCALE.POPUP_GENERATE_NAME]: {
    en: 'Generate Name',
    ru: 'Сгенерировать имя',
    cz: 'Generovat jméno',
    zh: '產生名稱',
    fr: 'Générer un nom',
    br: 'Gerar Nome',
    vi: 'Tạo Tên',
    id: 'Buat Nama',
  },
  [LOCALE.LOGIN_ALREADY_LOGGED_IN]: {
    en: 'You are already logged in',
    ru: 'Вы уже вошли в систему',
    cz: 'Již jste přihlášeni',
    zh: '您已经登入了',
    fr: 'Vous êtes déjà connecté',
    br: 'Você já está logado',
    vi: 'Bạn đã đăng nhập',
    id: 'Anda sudah masuk',
  },
  [LOCALE.RANKED_MATCH]: {
    en: 'Ranked',
    ru: 'Рейтинговый',
    br: 'Ranqueado',
    cz: 'Hodnocený',
    zh: '排位賽',
    fr: 'Classé',
    vi: 'Xếp hạng',
    id: 'Peringkat',
  },
  [LOCALE.NORMAL_MATCH]: {
    en: 'Unranked Game',
    cz: 'Nehodnocená hra',
    zh: '非排位赛',
    fr: 'Partie non classée',
    ru: 'Не ранговая игра',
    br: 'Partida sem classificação',
    vi: 'Trò chơi không xếp hạng',
    id: 'Permainan Tidak Berperingkat',
  },
  [LOCALE.PLAY_PAGE_PLAY_A_GAME]: {
    en: 'Play a Game!',
    ru: 'Играть!',
    br: 'Jogar uma partida!',
    cz: 'Hrát hru!',
    zh: '開始遊戲！',
    fr: 'Jouer une partie!',
    vi: 'Chơi game!',
    id: 'Mainkan game!',
  },
  [LOCALE.CASUAL_MATCH]: {
    en: 'Casual',
    ru: 'Повседневный',
    br: 'Casual',
    cz: 'Volný',
    zh: '隨意遊玩',
    fr: 'Décontracté',
    vi: 'Thường',
    id: 'Santai',
  },
  [LOCALE.BLITZ_MATCH]: {
    en: 'Blitz',
    ru: 'Блиц',
    br: 'Blitz',
    cz: 'Blitz',
    zh: '閃電',
    fr: 'Blitz',
    vi: 'Blitz',
    id: 'Blitz',
  },
  [LOCALE.AI_MATCH]: {
    en: 'AI Matches (PvAI):',
    ru: 'Игры против ботов:',
    br: 'Partida contra Bot (PvAI):',
    cz: 'Zápasy proti AI (PvAI):',
    zh: 'AI 對戰 (人對電腦)：',
    fr: "Matchs contre l'IA (PvIA):",
    vi: 'Trận đấu AI (PvAI):',
    id: 'Pertandingan AI (PvAI):',
  },
  [LOCALE.BLITZ_PLAYERS_AND_TIME]: {
    en: '5min - 2V2',
    ru: '5мин - 2на2',
    br: '5min - 2V2',
    cz: '5min - 2v2',
    zh: '5分鐘 - 2v2',
    fr: '5min - 2v2',
    vi: '5 phút - 2v2',
    id: '5 menit - 2v2',
  },
  [LOCALE.RANKED_PLAYERS_AND_TIME]: {
    en: '10min - 2V2',
    ru: '10мин - 2 на 2',
    br: '10min - 2V2',
    cz: '10min - 2v2',
    zh: '10分鐘 - 2v2',
    fr: '10min - 2v2',
    vi: '10 phút - 2v2',
    id: '10 menit - 2v2',
  },
  [LOCALE.CASUAL_PLAYERS_AND_TIME]: {
    en: '8/10min - 1V1/2V2',
    ru: '8/10мин - 1на1/2на2',
    br: '8/10min - 1V1/2V2',
    cz: '8/10min - 1V1/2V2',
    zh: '8/10分鐘 - 1V1/2V2',
    fr: '8/10min - 1V1/2V2',
    vi: '8/10phút - 1V1/2V2',
    id: '8/10menit - 1V1/2V2',
  },
  [LOCALE.COOP_PLAYERS_AND_TIME]: {
    en: '10min - 2V2AI',
    ru: '10мин - 2 на 2 с ИИ',
    br: '10min - 2V2IA',
    cz: '10min - 2V2AI',
    zh: '10分鐘 - 2对2AI',
    fr: '10min - 2V2IA',
    vi: '10 phút - 2V2AI',
    id: '10menit - 2V2AI',
  },
  [LOCALE.ACTIVATE_ITEM]: {
    en: 'Activate Item',
    ru: 'Активировать',
    br: 'Ativar Item',
    cz: 'Aktivovat položku',
    zh: '啟用物品',
    fr: "Activer l'objet",
    vi: 'Kích hoạt mục',
    id: 'Aktifkan Item',
  },
  [LOCALE.ACTIVE_ITEM]: {
    en: 'Item Active',
    ru: 'Предмет активен',
    br: 'Item Ativo',
    cz: 'Položka aktivní',
    zh: '物品啟用中',
    fr: 'Objet actif',
    vi: 'Mục hoạt động',
    id: 'Item Aktif',
  },
  [LOCALE.CURRENT_SEASON]: {
    en: 'Ongoing Season {} ends in ',
    ru: 'Текущий сезон {} заканчивается через ',
    br: 'Temporada atual {} termina em ',
    cz: 'Probíhající sezóna {} končí za ',
    zh: '正在进行的第 {} 季将在 ',
    fr: 'La saison en cours {} se termine dans ',
    vi: 'Mùa hiện tại {} kết thúc trong ',
    id: 'Musim {} berakhir dalam ',
  },
}
