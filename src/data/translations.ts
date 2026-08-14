import { Language } from '../types';

export interface Translations {
  ann: {
    a: string;
    b: string;
    c: string;
  };
  nav: {
    products: string;
    dual: string;
    triple: string;
    quad: string;
    amazon: string;
    software: string;
    reviews: string;
    compatibility: string;
    about: string;
    help: string;
    login: string;
    cart: string;
    search: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    matchButton: string;
    popularModels: string;
  };
  deviceCard: {
    badge: string;
    title: string;
    os: string;
    browser: string;
    screen: string;
    model: string;
    detecting: string;
    note: string;
  };
  assessment: {
    variantsFound: (count: number) => string;
    singleMatchSubtitle: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    enterModelPrompt: string;
    enterModelDesc: string;
    officialSpecs: string;
    risk: string;
    ports: string;
    recommendation: string;
    accessory: string;
    howMonitorsConnect: string;
    primaryOptionTitle: string;
    primaryOptionDesc: string;
    h5OptionTitle: string;
    h5OptionDesc: string;
    reminderTitle: string;
    reminderDesc: string;
    viewProductsBtn: string;
    fourStepsTitle: string;
    fourStepsSubtitle: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    step4Title: string;
    step4Body: string;
  };
  cableGuide: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  brandReference: {
    eyebrow: string;
    title: string;
    subtitle: string;
    directPath: string;
    fallbackPath: string;
  };
  decadeTrends: {
    eyebrow: string;
    title: string;
    subtitle: string;
    brandCol: string;
    earlyCol: string;
    midCol: string;
    recentCol: string;
    commonFitCol: string;
  };
  databaseTable: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allBrands: string;
    allStatuses: string;
    allRisks: string;
    searchPlaceholder: string;
    showingResults: (shown: number, total: number) => string;
    colModel: string;
    colGen: string;
    colPorts: string;
    colStatus: string;
    colRisk: string;
    colAction: string;
    viewDetail: string;
    noResults: string;
    resetFilter: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  footer: {
    shopTitle: string;
    supportTitle: string;
    infoTitle: string;
    getInTouch: string;
    followUs: string;
    backToTop: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    ann: {
      a: 'FREE GLOBAL EXPRESS SHIPPING',
      b: '30-DAY RISK-FREE TRIAL',
      c: '1-YEAR OFFICIAL WARRANTY',
    },
    nav: {
      products: 'Products',
      dual: 'Dual Extender',
      triple: 'Tri-Screen Extender',
      quad: 'Quad Display',
      amazon: 'Amazon Store',
      software: 'DisplayLink Driver',
      reviews: 'Reviews',
      compatibility: 'Compatibility',
      about: 'About',
      help: 'Support',
      login: 'Sign In',
      cart: 'Cart',
      search: 'Search laptop model...',
    },
    hero: {
      badge: 'Official S10 Pro & P7 Compatibility Check',
      title: 'Tri-Screen Compatibility Checker',
      subtitle: 'Instant verification: Check if your laptop can independently drive dual portable screens while keeping the host screen active.',
      searchPlaceholder: 'Search model (e.g. MacBook Air M2, Dell XPS 15, ThinkPad X1)...',
      matchButton: 'Verify Now',
      popularModels: 'Quick Check:',
    },
    deviceCard: {
      badge: 'Live Detection',
      title: 'Current System',
      os: 'Operating System',
      browser: 'Browser',
      screen: 'Host Resolution',
      model: 'Device Spec',
      detecting: 'Scanning...',
      note: 'Auto-detected browser environment. Search your exact model above for verified port verification.',
    },
    assessment: {
      variantsFound: (c) => `${c} Verified Configurations Found`,
      singleMatchSubtitle: 'Verified hardware output for Anyking S10 Pro & P7 tri-screen portable monitors.',
      notFoundTitle: 'Model Not in Database — Guided Verification',
      notFoundSubtitle: 'Follow the 4 hardware verification steps below to check your laptop ports.',
      enterModelPrompt: 'Type your model to start',
      enterModelDesc: 'Enter your laptop model or SKU to inspect dual display port capabilities.',
      officialSpecs: 'Official Spec Sheet',
      risk: 'Risk Level',
      ports: 'Physical Ports',
      recommendation: 'Connection Solution',
      accessory: 'Required Cable',
      howMonitorsConnect: '3 Connection Pathways',
      primaryOptionTitle: 'Dual USB-C (Direct Plug)',
      primaryOptionDesc: 'Connect each side screen directly with 1x Full-featured USB-C (DisplayPort alt mode).',
      h5OptionTitle: 'H5 DisplayLink Adapter',
      h5OptionDesc: 'For Mac M1/M2/M3 base chips or laptops with only 1 video out. Powers 2nd screen via USB.',
      reminderTitle: 'Power Delivery (PD)',
      reminderDesc: 'If laptop USB-C power is under 15W, connect external 65W PD adapter to screen.',
      viewProductsBtn: 'Browse Products',
      fourStepsTitle: '4-Step Manual Port Verification Guide',
      fourStepsSubtitle: 'Determine your connection mode in 4 quick checks:',
      step1Title: '1. Model SKU',
      step1Body: 'Windows: Win+R → msinfo32. Mac: Apple Menu → About This Mac.',
      step2Title: '2. 3-Display Support',
      step2Body: 'Verify GPU supports: Internal Screen + 2 External Displays.',
      step3Title: '3. Video Outputs',
      step3Body: 'Count ports: Need 2x USB-C (DP) OR 1x USB-C + 1x HDMI.',
      step4Title: '4. Select Cable Mode',
      step4Body: 'Direct Plug if 2 outputs exist; otherwise use Anyking H5 Adapter.',
    },
    cableGuide: {
      eyebrow: 'Connection Hardware',
      title: 'Cable Identification Guide',
      subtitle: 'Visual recognition of all included cables and DisplayLink adapters.',
    },
    brandReference: {
      eyebrow: 'Port Architectures',
      title: 'Brand Port Profiles',
      subtitle: 'Standard factory port layouts across major laptop brands.',
      directPath: 'Direct Plug & Play',
      fallbackPath: 'H5 DisplayLink Path',
    },
    decadeTrends: {
      eyebrow: 'Historical Matrix',
      title: 'Port Evolution (2015–2026)',
      subtitle: 'Interface generations and corresponding Anyking cable setups.',
      brandCol: 'Brand',
      earlyCol: '2015–2017 (Legacy)',
      midCol: '2018–2020 (Transition)',
      recentCol: '2021–2026 (Modern USB4/TB4)',
      commonFitCol: 'Recommended Setup',
    },
    databaseTable: {
      eyebrow: 'Lab Verified Database',
      title: '140+ Laptop Compatibility Matrix',
      subtitle: 'Real-world laboratory test records for Anyking tri-screen extenders.',
      allBrands: 'All Brands',
      allStatuses: 'All Statuses',
      allRisks: 'All Risks',
      searchPlaceholder: 'Filter by model, port, or status...',
      showingResults: (shown, total) => `Showing ${shown} of ${total} verified records`,
      colModel: 'Laptop Model',
      colGen: 'Chipset / Gen',
      colPorts: 'Ports Layout',
      colStatus: 'Verdict',
      colRisk: 'Risk',
      colAction: 'Inspect',
      viewDetail: 'View Specs',
      noResults: 'No matching laptop records found.',
      resetFilter: 'Reset Filters',
    },
    faq: {
      eyebrow: 'Help Center',
      title: 'Frequently Asked Questions',
      subtitle: 'Quick answers for connection, power, and DisplayLink setup.',
    },
    footer: {
      shopTitle: 'Extenders',
      supportTitle: 'Support',
      infoTitle: 'Brand Info',
      getInTouch: 'Contact Us',
      followUs: 'Community',
      backToTop: 'Back to Top',
      rights: 'All rights reserved.',
    },
  },
  ja: {
    ann: {
      a: '送料無料・速達配送',
      b: '30日間安心返金保証',
      c: '1年間公式メーカー保証',
    },
    nav: {
      products: '製品一覧',
      dual: '2画面拡張',
      triple: '3画面拡張',
      quad: '4画面拡張',
      amazon: 'Amazonストア',
      software: 'DisplayLinkドライバ',
      reviews: 'レビュー',
      compatibility: '互換性診断',
      about: 'ブランドについて',
      help: 'ヘルプ',
      login: 'ログイン',
      cart: 'カート',
      search: '型番を検索...',
    },
    hero: {
      badge: 'Anyking S10 Pro / P7 互換性チェック',
      title: '3画面拡張モニター 互換性診断',
      subtitle: 'ノートPC本体の画面を維持しながら、左右2枚の拡張スクリーンを独立出力できるか即時判定します。',
      searchPlaceholder: '型番を入力（例: MacBook Air M2, XPS 15, ThinkPad X1）...',
      matchButton: '判定する',
      popularModels: 'クイック検索:',
    },
    deviceCard: {
      badge: 'リアルタイム検出',
      title: '現在の環境',
      os: 'OS',
      browser: 'ブラウザ',
      screen: '解像度',
      model: '端末情報',
      detecting: '検出中...',
      note: 'ブラウザ環境を自動取得しています。正確な端子判定は上の検索窓に型番を入力してください。',
    },
    assessment: {
      variantsFound: (c) => `${c}件の検証済み構成`,
      singleMatchSubtitle: 'Anyking S10 Pro / P7 拡張スクリーン対応の検証済み結果です。',
      notFoundTitle: '未登録モデル — 4ステップ自己診断',
      notFoundSubtitle: '以下の手順でノートPCの端子仕様を確認してください。',
      enterModelPrompt: '型番を入力してください',
      enterModelDesc: 'ノートPCの型番を入力すると、端子の映像出力性能を判定します。',
      officialSpecs: '公式仕様を確認',
      risk: 'リスク判定',
      ports: '搭載ポート',
      recommendation: '接続ソリューション',
      accessory: '必要なケーブル',
      howMonitorsConnect: '3つの接続方式',
      primaryOptionTitle: 'USB-C Direct接続',
      primaryOptionDesc: 'フル機能Type-C（DP Alt mode）で左右の画面に直接1本ずつ接続。',
      h5OptionTitle: 'H5 DisplayLinkアダプタ',
      h5OptionDesc: 'Mac M1/M2/M3ベースチップや映像出力が1系統のみのPCに最適。',
      reminderTitle: '給電（PD）の注意',
      reminderDesc: 'PCのType-C給電が不足する場合は、外部PD電源をスクリーンに接続してください。',
      viewProductsBtn: '製品を見る',
      fourStepsTitle: '4ステップ端子確認ガイド',
      fourStepsSubtitle: '以下の4項目で接続可否を判断できます：',
      step1Title: '1. 正確な型番を確認',
      step1Body: 'Windows: Win+R → msinfo32。Mac: Appleメニュー → このMacについて。',
      step2Title: '2. 3画面出力の上限を確認',
      step2Body: '本体画面＋外部2画面の同時出力に対応しているか確認。',
      step3Title: '3. 映像出力端子の数',
      step3Body: 'Type-C(DP)×2 または Type-C(DP)×1 + HDMI×1 が必要。',
      step4Title: '4. 接続方式の選択',
      step4Body: '端子が揃っていれば直接接続。不足時はH5アダプタをご利用ください。',
    },
    cableGuide: {
      eyebrow: 'ケーブル仕様',
      title: 'ケーブル・アダプタ一覧',
      subtitle: '付属ケーブルとDisplayLinkアダプタの端子形状ガイド。',
    },
    brandReference: {
      eyebrow: 'ブランド別仕様',
      title: '主要ブランドの端子傾向',
      subtitle: '各社ノートPCの標準的な端子レイアウトと接続推奨パス。',
      directPath: 'ダイレクト接続',
      fallbackPath: 'H5アダプタ接続',
    },
    decadeTrends: {
      eyebrow: 'ポート年表',
      title: '端子の進化（2015–2026）',
      subtitle: '年代別の端子構成と対応Anykingケーブル。',
      brandCol: 'ブランド',
      earlyCol: '2015–2017 (従来型)',
      midCol: '2018–2020 (移行期)',
      recentCol: '2021–2026 (USB4/TB4)',
      commonFitCol: '推奨接続',
    },
    databaseTable: {
      eyebrow: '実機テスト済み',
      title: '140+モデル 互換性データベース',
      subtitle: 'ラボテストとユーザー実績に基づく検証データ一覧。',
      allBrands: 'すべてのブランド',
      allStatuses: 'すべての判定',
      allRisks: 'すべてのリスク',
      searchPlaceholder: '型番、端子、判定で絞り込み...',
      showingResults: (shown, total) => `${total}件中 ${shown}件を表示`,
      colModel: 'ノートPC型番',
      colGen: 'CPU / 世代',
      colPorts: '端子構成',
      colStatus: '判定',
      colRisk: 'リスク',
      colAction: '詳細',
      viewDetail: '仕様を見る',
      noResults: '該当するモデルが見つかりませんでした。',
      resetFilter: '条件をリセット',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'よくあるご質問',
      subtitle: '接続、給電、DisplayLinkドライバに関するFAQ。',
    },
    footer: {
      shopTitle: '製品情報',
      supportTitle: 'サポート',
      infoTitle: '会社概要',
      getInTouch: 'お問い合わせ',
      followUs: 'SNS',
      backToTop: 'トップへ戻る',
      rights: '無断転載を禁じます。',
    },
  },
  zh: {
    ann: {
      a: '顺丰包邮 · 极速现货',
      b: '30天无忧试用',
      c: '1年官方全国联保',
    },
    nav: {
      products: '产品中心',
      dual: '双屏扩展器',
      triple: '三屏扩展器',
      quad: '四屏扩展器',
      amazon: '官方旗舰店',
      software: 'DisplayLink 驱动',
      reviews: '用户评价',
      compatibility: '兼容性查询',
      about: '关于 Anyking',
      help: '服务支持',
      login: '登录',
      cart: '购物车',
      search: '搜索笔记本型号...',
    },
    hero: {
      badge: 'Anyking S10 Pro / P7 官方兼容性认证中心',
      title: '三屏扩展屏 兼容性精准速查',
      subtitle: '1秒核验：笔记本自带屏常亮时，能否独立驱动两侧 2 块扩展屏（直连 / H5 转接 / 扩展坞）。',
      searchPlaceholder: '输入笔记本型号（如：MacBook Air M2、联想小新 Pro 16、Dell XPS 15）...',
      matchButton: '一键核验',
      popularModels: '热门机型速测:',
    },
    deviceCard: {
      badge: '实时感知',
      title: '当前设备环境',
      os: '操作系统',
      browser: '浏览器',
      screen: '主屏分辨率',
      model: '硬件特征',
      detecting: '检测中...',
      note: '已自动捕获当前浏览器环境。完整接口判定请在上方搜索具体笔记本型号。',
    },
    assessment: {
      variantsFound: (c) => `已命中 ${c} 款已验证机型`,
      singleMatchSubtitle: '针对 Anyking S10 Pro & P7 便携三屏的硬件级输出认证。',
      notFoundTitle: '未收录精确型号 — 4步硬件自检',
      notFoundSubtitle: '请参考下方 4 步接口核验流程，快速确定您的连接方案。',
      enterModelPrompt: '输入型号开始判定',
      enterModelDesc: '输入具体机型或出厂 SKU，即刻查看双扩展屏接口支持情况。',
      officialSpecs: '官方配置来源',
      risk: '评估风险',
      ports: '物理接口',
      recommendation: '连接方案',
      accessory: '所需线材',
      howMonitorsConnect: '3 大核心连接链路',
      primaryOptionTitle: '全功能 Type-C 双线直连',
      primaryOptionDesc: '两侧屏幕各通过 1 根全功能 Type-C 线（DP 视频流）直连笔记本，即插即用。',
      h5OptionTitle: 'H5 DisplayLink 转换器',
      h5OptionDesc: '适用于苹果 M1/M2/M3 基础款芯片或仅有 1 个视频输出口的笔记本，免占用原生通道。',
      reminderTitle: '供电提示（PD 65W）',
      reminderDesc: '若笔记本 Type-C 供电功率不足 15W，请为屏幕接入独立 PD 充电头。',
      viewProductsBtn: '选购扩展屏',
      fourStepsTitle: '4 步接口快速自检法',
      fourStepsSubtitle: '不看插头形状，直接核对核心硬件能力：',
      step1Title: '1. 查完整型号',
      step1Body: 'Win系统: Win+R 输 msinfo32; Mac系统: 左上角苹果图标 → 关于本机。',
      step2Title: '2. 查三屏独立支持',
      step2Body: '核对显卡/CPU是否支持“自带屏 + 2块外接屏”同时独立异显。',
      step3Title: '3. 数独立视频输出口',
      step3Body: '需具备 2个全功能Type-C(DP) 或 1个全功能Type-C + 1个HDMI。',
      step4Title: '4. 锁定连接线材',
      step4Body: '有2路输出选直连；仅1路输出选 Anyking H5 转接头。',
    },
    cableGuide: {
      eyebrow: '线材图解',
      title: '官方线材与转接器图鉴',
      subtitle: '图形化展示各类接口形态与针脚标识，直观认线不选错。',
    },
    brandReference: {
      eyebrow: '品牌通则',
      title: '主流品牌接口特性分布',
      subtitle: '涵盖各品牌常用接口布局与常见直连/转接建议。',
      directPath: '直连路径',
      fallbackPath: 'H5 转接方案',
    },
    decadeTrends: {
      eyebrow: '接口演进',
      title: '十年接口进化矩阵（2015–2026）',
      subtitle: '从 USB-A/HDMI 到 USB4/雷电4，快速匹配 Anyking 方案。',
      brandCol: '品牌',
      earlyCol: '2015–2017 (传统接口)',
      midCol: '2018–2020 (过渡阶段)',
      recentCol: '2021–2026 (现代雷电/USB4)',
      commonFitCol: '主流适配方案',
    },
    databaseTable: {
      eyebrow: '实机实验室',
      title: '140+ 款笔记本实机验证库',
      subtitle: '由官方实验室及用户真实测试归纳的 S10 Pro / P7 适配档案。',
      allBrands: '全部品牌',
      allStatuses: '全部判定',
      allRisks: '全部风险等级',
      searchPlaceholder: '搜索机型、接口、判定或 SKU...',
      showingResults: (shown, total) => `已显示 ${shown} / 共 ${total} 条验证记录`,
      colModel: '笔记本机型',
      colGen: '处理器 / 平台',
      colPorts: '物理接口配置',
      colStatus: '适配判定',
      colRisk: '风险',
      colAction: '查看',
      viewDetail: '查看详情',
      noResults: '未找到符合条件的笔记本机型。',
      resetFilter: '重置筛选',
    },
    faq: {
      eyebrow: '常见疑问',
      title: '常见问题解答',
      subtitle: '涵盖三屏同显/异显、供电功率、Mac 芯片适配及驱动安装。',
    },
    footer: {
      shopTitle: '便携扩展屏',
      supportTitle: '服务支持',
      infoTitle: '关于品牌',
      getInTouch: '联系我们',
      followUs: '官方社群',
      backToTop: '返回顶部',
      rights: '版权所有。',
    },
  },
};
