<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>九州親子自駕遊 2026</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563EB;      /* 主色藍 */
            --secondary: #F59E0B;    /* 輔色黃 */
            --bg: #F3F4F6;           /* 背景灰 */
            --white: #FFFFFF;
            --text-main: #1F2937;
            --text-sub: #6B7280;
            --danger: #EF4444;
            --food-choice: #8B5CF6;  /* 紫色用於餐食選擇 */
            --tag-food-bg: #EDE9FE;
            --tag-toyota: #E0E7FF;   /* 淺藍紫 for Toyota */
            --info-bg: #E0F2F1;      /* 資訊頁背景色 */
            --info-text: #0D9488;    /* 資訊頁文字色 */
            --kumamoto-info-bg: #F0F9FF; /* 熊本資訊背景 */
            --kumamoto-info-text: #0E7490; /* 熊本資訊文字 */
            --beppu-info: #14B8A6;   /* 別府地獄專用色 */
            --beppu-bg: #E0F2F1;
            
            /* Safe Area Variables */
            --safe-area-bottom: env(safe-area-inset-bottom);
        }

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

        body {
            font-family: 'Noto Sans TC', sans-serif;
            background-color: var(--bg);
            color: var(--text-main);
            margin: 0;
            padding: 0;
            padding-bottom: calc(80px + var(--safe-area-bottom)); /* 底部導航空間 + 安全區域 */
        }

        /* Header - Modified for Side-by-Side Layout */
        header {
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            color: var(--white);
            padding: 15px 20px;
            box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
            position: relative;
            z-index: 10;
        }
        
        .header-content {
            display: flex;
            flex-direction: row; 
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap; 
        }

        .header-title-area {
            flex: 1;
            min-width: 200px;
        }

        .header-title-area h1 { margin: 0; font-size: 1.6rem; font-weight: 700; white-space: nowrap; }
        .header-title-area .subtitle { font-size: 0.9rem; opacity: 0.9; margin-top: 5px; }
        .header-title-area .badge-trip { 
            background: rgba(255,255,255,0.2); 
            padding: 4px 10px; 
            border-radius: 20px; 
            font-size: 0.8rem; 
            display: inline-block;
            margin-top: 8px;
        }

        /* New Header Weather Box - Side Layout */
        .header-weather-box {
            flex: 0 0 auto; 
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 50px; /* Pill shape */
            padding: 8px 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            color: white;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-height: 70px;
        }

        /* Weather Columns */
        .hw-col-loc {
            padding-right: 15px;
            border-right: 1px solid rgba(255,255,255,0.3);
            text-align: center;
            min-width: 80px;
        }
        .hw-loc { font-size: 1.1rem; font-weight: 700; display: block; line-height: 1.2; }
        .hw-date { font-size: 0.75rem; opacity: 0.9; display: block; margin-top: 4px; }

        .hw-col-main {
            padding: 0 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .hw-icon svg { width: 36px; height: 36px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1)); }
        
        .hw-temp-group { text-align: center; }
        .hw-temp { font-size: 1.4rem; font-weight: 700; line-height: 1; }
        .hw-desc { font-size: 0.8rem; font-weight: 500; display: block; margin-top: 2px; }
        .hw-range { font-size: 0.7rem; opacity: 0.9; display: block; margin-top: 2px; font-family: monospace; }

        .hw-col-advice {
            padding-left: 15px;
            border-left: 1px solid rgba(255,255,255,0.3);
            max-width: 140px;
            font-size: 0.75rem;
            line-height: 1.3;
            opacity: 0.95;
            display: flex;
            align-items: center;
            min-height: 50px; /* Ensure height for border */
        }

        /* Container & Tabs */
        .container { display: none; padding: 20px; animation: fadeIn 0.3s ease; max-width: 800px; margin: 0 auto; }
        .container.active { display: block; }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Cards */
        .card {
            background: var(--white);
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 16px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.04);
            border: 1px solid rgba(0,0,0,0.03);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            border-bottom: 1px solid #eee;
            padding-bottom: 8px;
        }
        .card-title { font-weight: 700; color: var(--primary); font-size: 1.05rem; }

        /* Day specific styles */
        .day-wrapper {
            background: var(--white);
            border-radius: 12px;
            margin-bottom: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            transition: box-shadow 0.2s;
        }

        .day-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            cursor: pointer;
            border-radius: 12px;
            border-left: 5px solid transparent; 
            transition: background-color 0.2s, border-left-color 0.3s;
        }
        
        .day-toggle:active { background-color: #F8F9FB; }
        .day-toggle.open { border-left-color: var(--primary); }

        .day-info h3 { margin: 0; font-size: 1.1rem; color: var(--text-main); }
        .day-info span { font-size: 0.85rem; color: var(--text-sub); }
        
        .toggle-icon { transition: transform 0.3s; font-size: 0.8rem; color: var(--text-sub); font-weight: 700; }
        .day-toggle.open .toggle-icon { transform: rotate(180deg); color: var(--primary); }

        .timeline { display: none; padding: 15px 15px 5px 30px; border-top: 1px solid #F3F4F6; }
        .timeline.show { display: block; }

        .event { position: relative; padding-left: 20px; margin-bottom: 24px; }
        .event:last-child { margin-bottom: 0; }
        .event::before {
            content: ''; position: absolute; left: -7px; top: 6px;
            width: 12px; height: 12px; border-radius: 50%;
            background: var(--white); border: 3px solid var(--secondary);
            z-index: 1;
        }
        
        /* Event Styles */
        .event-meal .activity { color: var(--food-choice); }
        .event-meal .desc { border-left: 2px solid var(--food-choice); padding-left: 8px; margin-top: 5px; }
        .time { font-size: 0.85rem; color: var(--text-sub); font-weight: 600; font-family: monospace; }
        .activity { font-size: 1rem; font-weight: 700; margin: 4px 0; color: var(--text-main); }
        .desc { font-size: 0.9rem; color: #555; line-height: 1.5; margin-bottom: 8px; }

        /* Tags */
        .tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag { font-size: 0.75rem; padding: 2px 8px; border-radius: 6px; font-weight: 500; }
        .tag-food { background: var(--tag-food-bg); color: var(--food-choice); }
        .tag-move { background: #DBEAFE; color: #1E40AF; }
        .tag-stay { background: #D1FAE5; color: #059669; }
        .tag-spot { background: #FCE7F3; color: #BE185D; }
        .tag-kids { background: #E0F2FE; color: #0284C7; border: 1px solid #BAE6FD; }
        .tag-car { background: var(--tag-toyota); color: #4338CA; }
        .tag-relax { background: #FFFBEB; color: #D97706; border: 1px solid #FCD34D; }
        .tag-shrine { background: #FEE2E2; color: #B91C1C; border: 1px solid #FCA5A5; }
        .tag-flight { background: #BFDBFE; color: #1D4ED8; }
        .tag-tip { background: var(--info-bg); color: var(--info-text); }
        .tag-shop { background: var(--kumamoto-info-bg); color: var(--kumamoto-info-text); }
        .tag-beppu { background: var(--beppu-bg); color: var(--beppu-info); }
        .tag-snow { background: #E0F2FE; color: #0369A1; border: 1px solid #BAE6FD; }

        /* Buttons */
        .btn-map { display: inline-flex; align-items: center; text-decoration: none; color: var(--primary); font-size: 0.85rem; font-weight: 600; margin-top: 4px; padding: 4px 0; }
        .btn-map::before { content: '📍'; margin-right: 4px; }
        .btn-link { background: var(--primary); color: white; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-size: 0.9rem; display: block; text-align: center; margin-top: 10px; }
        .btn-link-sub { background: #EBF5FF; color: var(--primary); text-decoration: none; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; display: block; text-align: center; margin-top: 8px; border: 1px solid var(--primary); }
        .btn-link-tel { background: #D1FAE5; color: #059669; text-decoration: none; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; display: block; text-align: center; margin-top: 8px; border: 1px solid #059669; }
        .btn-link-tel::before { content: '📞'; margin-right: 4px; }

        /* Info Grid */
        .info-grid { display: grid; grid-template-columns: 100px 1fr; gap: 10px; font-size: 0.9rem; margin-bottom: 8px; }
        .info-label { color: var(--text-sub); }
        .info-val { font-weight: 500; }
        .info-detail-box { border: 1px solid #D1D5DB; padding: 12px; border-radius: 8px; margin-top: 10px; }
        .info-detail-box h4 { margin: 0 0 8px 0; font-size: 1rem; color: var(--primary); }

        /* Info Sections */
        .info-section { background-color: var(--info-bg); padding: 15px; border-radius: 12px; margin-bottom: 16px; border: 1px solid #5EEAD4; }
        .info-section.kumamoto { background-color: var(--kumamoto-info-bg); border-color: #90CDF4; }
        .info-section.kumamoto h3 { color: var(--kumamoto-info-text); border-bottom: 2px solid #90CDF4; }
        .info-section.winter-drive { background-color: #FEF2F2; border-color: #FCA5A5; color: #B91C1C; }
        .info-section.winter-drive h3 { color: #B91C1C; border-bottom: 2px solid #FCA5A5; }
        .info-section h3 { color: var(--info-text); font-size: 1.2rem; margin-top: 0; border-bottom: 2px solid #5EEAD4; padding-bottom: 5px; margin-bottom: 15px; }

        /* Price table */
        .price-table { display: grid; grid-template-columns: 1fr 80px 80px; gap: 8px; font-size: 0.9rem; margin-top: 10px; }
        .price-header { font-weight: 700; color: var(--primary); padding-bottom: 4px; border-bottom: 1px solid var(--primary); }
        .price-item { padding: 4px 0; border-bottom: 1px dashed #DDD; }
        .price-item:last-child { border-bottom: none; }
        .price-item .detail { font-size: 0.8rem; color: var(--text-sub); }

        .safari-method { margin-top: 15px; padding: 10px; border-radius: 8px; border: 1px dashed var(--info-text); }
        .method-title { font-weight: 700; color: var(--primary); display: block; margin-bottom: 5px; font-size: 1rem; }
        .method-title.recommended { color: var(--danger); }
        .method-detail { font-size: 0.9rem; line-height: 1.5; color: #444; }

        /* Step List */
        .step-list { counter-reset: step-counter; padding-left: 0; list-style: none; margin-top: 10px; }
        .step-list li { position: relative; padding-left: 30px; margin-bottom: 10px; font-size: 0.9rem; line-height: 1.5; }
        .step-list li::before {
            counter-increment: step-counter;
            content: counter(step-counter);
            position: absolute; left: 0; top: 0;
            width: 20px; height: 20px;
            background-color: var(--primary);
            color: white;
            border-radius: 50%;
            text-align: center;
            font-size: 0.75rem;
            line-height: 20px;
        }

        /* Bottom Nav - Optimized for Safe Area */
        .nav-bar { 
            position: fixed; 
            bottom: 0; 
            left: 0; 
            width: 100%; 
            background: rgba(255,255,255,0.95); 
            backdrop-filter: blur(10px); 
            border-top: 1px solid #eee; 
            display: flex; 
            justify-content: space-around; 
            padding: 8px 0 calc(8px + var(--safe-area-bottom)); 
            box-shadow: 0 -4px 20px rgba(0,0,0,0.05); 
            z-index: 100; 
        }
        .nav-item { 
            text-align: center; 
            color: #9CA3AF; 
            font-size: 0.7rem; 
            cursor: pointer; 
            transition: color 0.2s; 
            flex-grow: 1; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            padding: 4px; /* Touch target */
        }
        .nav-item.active { color: var(--primary); }
        
        .nav-icon { 
            display: block; 
            margin-bottom: 4px; 
            height: 22px; 
            width: 22px;
        }
        .nav-icon svg {
            width: 100%;
            height: 100%;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .alert-box { background: #FEF2F2; border: 1px solid #FECACA; color: #991B1B; padding: 10px; border-radius: 8px; font-size: 0.85rem; margin-top: 8px; display: flex; gap: 8px; align-items: start; margin-bottom: 15px; }
        .event.optimized { border-left: 2px solid var(--secondary); padding-left: 28px; margin-left: -8px; background-color: #FFFDF5; padding-top: 5px; padding-bottom: 5px; border-radius: 4px; }
        
        /* AI Features Styles (Integrated) */
        .btn-ai-guide {
            background: linear-gradient(90deg, #8B5CF6, #EC4899);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            cursor: pointer;
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.2s;
            font-weight: 600;
        }
        .btn-ai-guide:active { transform: scale(0.95); }
        .btn-ai-guide svg { width: 14px; height: 14px; fill: currentColor; }

        /* New Style for Replay Button (Blue Theme) */
        .btn-ai-play {
            background: linear-gradient(135deg, #2563EB, #3B82F6); /* Blue Gradient */
            color: white;
            border: none;
            /* Icon Only Style */
            width: 40px;
            height: 40px;
            border-radius: 50%;
            padding: 0;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;
            margin-top: 10px;
            box-shadow: 0 2px 5px rgba(37, 99, 235, 0.2);
            transition: transform 0.2s;
        }
        .btn-ai-play:active { transform: scale(0.95); }
        .btn-ai-play svg { 
            width: 20px; 
            height: 20px; 
            fill: none; 
            stroke: currentColor; 
            stroke-width: 2; 
            stroke-linecap: round; 
            stroke-linejoin: round; 
        }

        /* Weather Tab Specific Styles */
        .weather-search-box {
            display: flex; gap: 10px; margin-bottom: 20px;
        }
        .weather-input {
            flex: 1; padding: 12px; border: 2px solid #E5E7EB; border-radius: 12px; font-size: 1rem; outline: none;
        }
        .weather-input:focus { border-color: var(--primary); }
        .btn-weather-search {
            background: var(--primary); color: white; border: none; padding: 0 20px; border-radius: 12px; font-weight: 600; cursor: pointer;
        }
        
        .weather-card-main {
            background: linear-gradient(135deg, #60A5FA, #2563EB);
            color: white; border-radius: 20px; padding: 20px; text-align: center;
            margin-bottom: 20px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            position: relative; overflow: hidden;
        }
        .weather-card-main::before {
            content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
            animation: rotate 20s linear infinite;
        }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .wc-temp-big { font-size: 4rem; font-weight: 700; line-height: 1; margin: 10px 0; position: relative; z-index: 1; }
        .wc-loc { font-size: 1.5rem; font-weight: 500; position: relative; z-index: 1; }
        /* Add flexbox to center content and icon */
        .wc-desc { 
            font-size: 1.1rem; 
            opacity: 0.9; 
            margin-bottom: 10px; 
            position: relative; 
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        /* New: Mini Icon Style for Weather Tab */
        .icon-mini {
            width: 18px;
            height: 18px;
            vertical-align: text-bottom;
            margin-right: 4px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            display: inline-block;
        }

        .weather-compare-row {
            display: flex; gap: 10px; margin-bottom: 20px;
        }
        .wc-mini-card {
            flex: 1; background: white; padding: 15px; border-radius: 16px; border: 1px solid #E5E7EB; text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .wc-mini-title { font-size: 0.85rem; color: #6B7280; margin-bottom: 5px; }
        .wc-mini-temp { font-size: 1.5rem; font-weight: 700; color: #1F2937; }
        .wc-diff-tag { 
            display: inline-block; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; margin-top: 5px; 
        }
        .wc-diff-hot { background: #FEE2E2; color: #DC2626; }
        .wc-diff-cold { background: #DBEAFE; color: #1D4ED8; }
        
        .advice-box {
            background: #F0FDF4; border: 1px solid #BBF7D0; padding: 15px; border-radius: 16px;
            color: #166534; font-size: 0.95rem; line-height: 1.6;
        }

        /* 新增：自定義彈出視窗 (Modal) 樣式 - 取代原生 alert/prompt */
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.5); z-index: 2000;
            display: none; justify-content: center; align-items: center;
            backdrop-filter: blur(3px);
            animation: fadeIn 0.2s;
        }
        .modal-box {
            background: white; width: 90%; max-width: 320px;
            border-radius: 16px; padding: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            text-align: center;
            transform: scale(0.95);
            animation: popIn 0.2s forwards;
        }
        @keyframes popIn { to { transform: scale(1); } }
        
        .modal-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; color: #1F2937; }
        .modal-desc { font-size: 0.9rem; color: #4B5563; margin-bottom: 15px; line-height: 1.5; }
        .modal-input {
            width: 100%; padding: 10px; border: 2px solid #E5E7EB; border-radius: 8px;
            font-size: 1rem; margin-bottom: 15px; outline: none;
        }
        .modal-input:focus { border-color: var(--primary); }
        
        .modal-btns { display: flex; gap: 10px; }
        .modal-btn {
            flex: 1; padding: 10px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;
        }
        .btn-cancel { background: #F3F4F6; color: #4B5563; }
        .btn-confirm { background: var(--primary); color: white; }

        /* AI Container Styles */
        .ai-header { font-size: 1.4rem; font-weight: 700; margin-bottom: 15px; color: #4B5563; display: flex; align-items: center; gap: 8px; border-bottom: 2px solid #E5E7EB; padding-bottom: 10px; }
        
        /* Chat History Box (Replaces old result box) */
        .chat-history {
            background: #F9FAFB;
            border: 1px solid #E5E7EB;
            border-radius: 16px;
            padding: 16px;
            min-height: 200px;
            flex: 1;
            overflow-y: auto;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }

        /* Chat Bubbles */
        .chat-row { display: flex; width: 100%; animation: slideIn 0.2s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

        .chat-row.user { justify-content: flex-end; }
        .chat-row.ai { justify-content: flex-start; }

        .chat-bubble {
            max-width: 85%;
            padding: 12px 16px;
            font-size: 1rem;
            line-height: 1.6;
            position: relative;
            word-wrap: break-word;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .chat-bubble.user {
            background: var(--primary);
            color: white;
            border-radius: 18px 18px 4px 18px;
        }

        .chat-bubble.ai {
            background: white;
            border: 1px solid #E5E7EB;
            color: #374151;
            border-radius: 18px 18px 18px 4px;
        }
        
        .chat-bubble strong { font-weight: 600; }
        .chat-bubble.ai strong { color: var(--primary); }

        /* Inline Audio Button in Bubble */
        .btn-audio-inline {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            background: #E0F2FE;
            color: var(--primary);
            border-radius: 50%;
            border: none;
            cursor: pointer;
            vertical-align: middle;
            margin-left: 8px;
            transition: transform 0.2s;
        }
        .btn-audio-inline:active { transform: scale(0.9); background: #BAE6FD; }
        .btn-audio-inline svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

        /* Updated Input Area Layout */
        .ai-input-wrapper { display: flex; flex-direction: column; gap: 10px; width: 100%; }
        
        /* New: Voice Language Toggle */
        .voice-lang-switch {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: -5px;
            padding: 0 5px;
            font-size: 0.85rem;
            color: #4B5563;
        }
        .lang-option {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            padding: 6px 12px; /* 加大一點點擊範圍 */
            border-radius: 20px; /* 圓角更明顯 */
            border: 1px solid transparent; /* 預留邊框空間 */
            transition: all 0.2s;
            background: #fff;
        }
        .lang-option:hover { background: #F3F4F6; }
        /* 隱藏原生 radio，改用樣式控制 */
        .lang-option input { display: none; }
        
        /* 選中時的樣式 */
        .lang-option:has(input:checked) {
            background: #EFF6FF;
            border-color: var(--primary);
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        
        /* 國旗 SVG 樣式 - 改為圓形簡約風 */
        .flag-icon {
            width: 24px;  /* 正方形 */
            height: 24px; /* 正方形 */
            border-radius: 50%; /* 圓形 */
            object-fit: cover;
            display: block;
            /* 移除陰影，改用 SVG 內部邊框，更扁平 */
        }

        /* Mobile: Prevent Zoom on Input */
        .ai-input {
            width: 100%; padding: 14px; border: 2px solid #E5E7EB;
            border-radius: 12px; outline: none; 
            font-size: 16px; /* 16px prevents iOS zoom */
            transition: border-color 0.2s;
        }
        .ai-input:focus { border-color: #3b82f6; }

        .ai-actions-row { display: flex; gap: 8px; width: 100%; }
        
        .btn-mode {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px; 
            font-size: 0.95rem;
            transition: transform 0.1s, opacity 0.2s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-height: 48px; /* Ensure touch target size */
            /* Mobile touch fix: Prevent text selection/callout on long press */
            -webkit-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            touch-action: manipulation;
        }
        .btn-mode:active { transform: scale(0.96); opacity: 0.9; }
        
        .btn-mode svg {
            width: 20px;
            height: 20px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2.5;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .btn-mode.consult { background: linear-gradient(135deg, #1D4ED8, #3B82F6); }
        .btn-mode.trans { background: linear-gradient(135deg, #0EA5E9, #38BDF8); }
        .btn-mode.voice { background: linear-gradient(135deg, #06B6D4, #22D3EE); }
        
        .btn-mode.voice.recording {
            background: linear-gradient(135deg, #EF4444, #F87171); 
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }

        .btn-ai-reset {
            background: #F3F4F6; color: #6B7280; border: 1px solid #D1D5DB;
            padding: 10px 16px; border-radius: 8px; font-size: 0.9rem;
            cursor: pointer; margin-bottom: 15px; display: none;
            align-self: flex-end;
            width: 100%; /* Full width on mobile usually better for back buttons */
            text-align: center;
        }
        .btn-ai-reset:hover { background: #E5E7EB; }

        .loading-bubble { 
            color: #9CA3AF; font-style: italic; font-size: 0.9rem; display: flex; align-items: center; gap: 4px;
        }
        .loading-dots:after {
            content: ' .';
            animation: dots 1.5s steps(5, end) infinite;
        }
        @keyframes dots {
            0%, 20% { content: ' .'; }
            40% { content: ' ..'; }
            60% { content: ' ...'; }
            80%, 100% { content: ' ....'; }
        }

        /* Mobile Optimization */
        @media (max-width: 600px) {
            .container { padding: 15px 12px; } /* Adjust padding */
            
            /* Header adjustments */
            .header-content { flex-direction: column; align-items: flex-start; gap: 10px; }
            .header-title-area h1 { font-size: 1.5rem; white-space: normal; line-height: 1.3; }
            
            /* Compact Weather Box - Modified to show Advice */
            .header-weather-box { 
                width: 100%; 
                justify-content: space-between; 
                padding: 10px 15px;
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.15);
                min-height: auto;
                flex-wrap: wrap; /* Allow items to wrap to next line */
                gap: 8px; /* Gap between rows */
            }
            
            /* Show Advice on Mobile now */
            .hw-col-advice { 
                display: block; /* Force display */
                width: 100%; /* Take full width */
                border-left: none; /* Remove side separator */
                border-top: 1px solid rgba(255,255,255,0.3); /* Add top separator */
                padding-left: 0;
                padding-top: 8px;
                max-width: none;
                min-height: auto;
                font-size: 0.8rem;
                line-height: 1.4;
            }

            .hw-col-main { flex-grow: 1; justify-content: flex-end; }
            .hw-col-loc { min-width: auto; border: none; padding-right: 0; text-align: left; }
            
            /* Compact Timeline */
            .timeline { padding-left: 15px; padding-right: 5px; } 
            .event { padding-left: 15px; }
            .event::before { left: -6px; }

            /* Optimized AI Buttons for Thumb Use */
            .ai-actions-row { 
                gap: 8px; 
            }
            .btn-mode {
                padding: 10px 4px;
                font-size: 0.8rem;
                flex-direction: column; /* Icon top, Text bottom */
                gap: 6px;
                line-height: 1.2;
                height: 70px; /* Taller easy to hit area */
            }
            .btn-mode svg { width: 24px; height: 24px; margin-bottom: 0; }
            
            /* Price Table scrollable if needed */
            .price-table { font-size: 0.85rem; }
        }
    </style>
</head>
<body>

    <header>
        <div class="header-content">
            <div class="header-title-area">
                <h1>九州親子自駕遊</h1>
                <div class="subtitle">2026/01/25 - 01/30 (6天5夜)</div>
                <div class="badge-trip">👨‍👩‍👦 親子自由行 • 熊本進福岡出</div>
            </div>

            <!-- 天氣資訊盒 (擺放在右側，三欄式設計) -->
            <div class="header-weather-box" id="header-weather">
                <!-- 1. 地點日期 -->
                <div class="hw-col-loc">
                    <span class="hw-loc" id="hw-loc">熊本市</span>
                    <span class="hw-date" id="hw-date">1/25 (Day 1)</span>
                </div>
                <!-- 2. 溫度狀態 -->
                <div class="hw-col-main">
                    <div class="hw-icon" id="hw-icon">
                        <!-- SVG Icon -->
                    </div>
                    <div class="hw-temp-group">
                        <div class="hw-temp" id="hw-temp">10°C</div>
                        <span class="hw-desc" id="hw-desc">晴時多雲</span>
                        <span class="hw-range" id="hw-range">2°C ~ 11°C</span>
                    </div>
                </div>
                <!-- 3. 穿衣建議 -->
                <div class="hw-col-advice" id="hw-advice">
                    氣溫適中但早晚偏涼，長袖配外套。
                </div>
            </div>
        </div>
    </header>

    <!-- TAB 1: 行程表 -->
    <div id="view-schedule" class="container active">
        <!-- Day 1 -->
        <div class="day-wrapper">
            <div class="day-toggle" id="toggle-d1" onclick="toggleTimeline('d1', this)">
                <div class="day-info">
                    <h3>Day 1: 抵達與熊本市區</h3>
                    <span>1/25 (日) • 住宿: The Blossom</span>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div id="d1" class="timeline">
                <div class="event">
                    <div class="time">11:00</div>
                    <div class="activity">抵達熊本機場 (KMJ)</div>
                    <div class="desc">領取行李後，前往1樓入境大廳外 4號乘車處。</div>
                    <div class="tags"><span class="tag tag-move">星宇航空</span></div>
                </div>
                <div class="event">
                    <div class="time">12:00</div>
                    <div class="activity">前往熊本市區 (交通選擇)</div>
                    <div class="desc">
                        <ul style="list-style-type: disc; padding-left: 20px;">
                            <li><b>選項 A (直達巴士)：</b> 搭乘利木津巴士往「熊本站」。車程約60分，成人約1000円。最輕鬆，行李免搬運。</li>
                            <li><b>選項 B (免費接駁+JR)：</b> 搭乘免費「空港Liner」至肥後大津站 (15分)，轉乘 JR 豐肥本線至熊本站 (40分，約480円)。不怕塞車，但需轉乘。</li>
                            <li><b>選項 C (計程車)：</b> 直接前往飯店，車程約 45-50 分，車資約 5000-6000円。</li>
                        </ul>
                    </div>
                    <div class="tags"><span class="tag tag-move">巴士</span><span class="tag tag-move">JR電車</span></div>
                </div>
                <div class="event">
                    <div class="time">13:10</div>
                    <div class="activity">飯店 Check-in / 寄放行李</div>
                    <div class="desc">The Blossom Kumamoto (JR熊本站旁 Amu Plaza樓上)。</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+KUMAMOTO" target="_blank" class="btn-map">導航</a>
                </div>
                <div class="event event-meal">
                    <div class="time">13:30</div>
                    <div class="activity">午餐/點心時段：熊本站周邊</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>肥後好物市場：：</b> (熊本站內) 推薦：いきなり団子 (長壽庵)、竹輪沙拉 (ヒライ)。快速解決。</li>
                            <li><b>熊本拉麵：：</b> 站前有幾間拉麵店，可快速飽餐一頓。</li>
                        </ul>
                    </div>
                    <div class="tags"><span class="tag tag-food">選擇午餐</span></div>
                </div>
                <div class="event">
                    <div class="time">15:00</div>
                    <div class="activity">熊本城 / 櫻之馬場 城彩苑</div>
                    <div class="desc">
                        欣賞天守閣外觀(修復中)，城彩苑有許多試吃與紀念品。
                        <div style="margin-top: 8px; border-top: 1px dashed #ccc; padding-top: 5px;">
                            <strong style="color: var(--food-choice); font-size: 0.9rem;">😋 城彩苑必吃推薦：</strong>
                            <ul style="list-style-type: disc; margin-top: 5px; padding-left: 20px; font-size: 0.9rem; color: #555;">
                                <li><b>海膽可樂餅 (うにコロッケ)：</b> 濃郁海膽內餡，外酥內軟。</li>
                                <li><b>菅乃屋 馬肉可樂餅：</b> 不敢吃生馬肉可以嘗試這個，無腥味。</li>
                                <li><b>抹茶霜淇淋 (TENTE)：</b> 熊本產茶葉製作，茶香濃厚。</li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn-ai-guide" onclick="askGeminiGuide('熊本城天守閣與忍者', '告訴5歲小孩關於這座城堡的忍者故事或武士故事，並給他一個尋找城牆上特殊石頭的任務。')">
                        ✨ 說故事給孩子聽
                    </button>
                    <a href="https://www.google.com/maps/search/?api=1&query=Sakuranobaba+Josaien" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-spot">親子散步</span><span class="tag tag-food">邊走邊吃</span></div>
                </div>
                <div class="event">
                    <div class="time">16:45</div>
                    <div class="activity">水前寺成趣園 (日式庭園備案)</div>
                    <div class="desc">若熊本城行程結束得早，可搭市電A系統至「水前寺公園」。日式庭園造景優美。</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Suizenji+Jojuen" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-kids">備案</span><span class="tag tag-spot">公園</span></div>
                </div>
                <div class="event">
                    <div class="time">18:00</div>
                    <div class="activity" style="color: var(--kumamoto-info-text);">上通/下通 購物街散策</div>
                    <div class="desc">
                        在晚餐前享受市區熱鬧的拱廊商店街。可搭乘市電至「通町筋」或「辛島町」站。
                        <span style="display:block; font-weight: 600; margin-top: 5px;">***詳盡攻略與美食選擇請見「旅遊資訊」頁籤。***</span>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kamitori+Shopping+Street" target="_blank" class="btn-map">導航至上通街</a>
                    <div class="tags"><span class="tag tag-shop">購物</span><span class="tag tag-relax">美食選擇多</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time">19:30</div>
                    <div class="activity">晚餐時段：熊本市區/車站選擇</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>勝烈亭豬排：：</b> (新市街/Amu Plaza) 知名日式豬排老店，白飯高麗菜可續。</li>
                            <li><b>天外天拉麵：：：</b> (新市街) 知名蒜味豚骨拉麵，重口味。</li>
                        </ul>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Katsuretsutei+Amu+Plaza+Kumamoto" target="_blank" class="btn-map">勝烈亭導航</a>
                    <div class="tags"><span class="tag tag-food">選擇晚餐</span></div>
                </div>
                <div class="event">
                    <div class="time">21:00</div>
                    <div class="activity">晚餐後建議行程 (自由選擇)</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>Amu Plaza 購物 (推薦)：：</b> 飯店樓下，可逛逛藥妝店或伴手禮店。</li>
                            <li><b>車站超市補貨：：：</b> 購買隔天零食及飲品。</li>
                            <li><b>飯店泡澡休息：：：</b> 第一天長途旅行，提早回房讓孩子休息。</li>
                        </ul>
                    </div>
                    <div class="tags"><span class="tag tag-spot">輕鬆</span><span class="tag tag-kids">購物</span></div>
                </div>
            </div>
        </div>

        <!-- Day 2 -->
        <div class="day-wrapper">
            <div class="day-toggle" id="toggle-d2" onclick="toggleTimeline('d2', this)">
                <div class="day-info">
                    <h3>Day 2: 觀光列車 & 黑川溫泉</h3>
                    <span>1/26 (一) • 住宿: 黑川溫泉</span>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div id="d2" class="timeline">
                <div class="alert-box" style="background: #F7FCEF; border: 1px solid #D9F99D; color: #3F6212;">
                    <span>⏱️</span> 
                    <div><b>優化目標：：</b>調整下午行程時間，確保 **17:05 從大觀峰出發**，於 **18:00 抵達黑川溫泉**。</div>
                </div>
                <div class="event">
                    <div class="time">09:00</div>
                    <div class="activity">Check-out & 前往熊本站 JR 月台</div>
                    <div class="desc">The Blossom 就在熊本站旁，移動非常方便，但仍建議預留時間。</div>
                    <div class="tags"><span class="tag tag-move">移動</span></div>
                </div>
                <div class="event">
                    <div class="time">09:57</div>
                    <div class="activity">JR 觀光列車「阿蘇男孩!」</div>
                    <div class="desc">
                        第3節車廂設有**木球池、兒童圖書室**和哺乳室，請預留時間帶孩子去玩。
                    </div>
                    <button class="btn-ai-guide" onclick="askGeminiGuide('阿蘇男孩號列車', '向孩子介紹這台火車上的小狗 Kuro 醬是誰，並建議一個在火車上可以玩的尋寶遊戲。')">
                        ✨ Kuro 醬是誰？
                    </button>
                    <!-- 備案 -->
                    <div style="margin-top:8px; border-top:1px dashed #ccc; padding-top:5px; font-size:0.85rem; color:#666;">
                        🚂 <b>停駛備案：</b> 若遇停駛，可改搭 <b>九州橫斷特急 (09:11發)</b> 或 <b>普通列車</b>。雖無親子設施，但仍可欣賞沿途風景。
                    </div>
                    <div class="tags"><span class="tag tag-move">火車</span><span class="tag tag-kids">親子必遊</span></div>
                </div>
                <div class="event">
                    <div class="time">11:27</div>
                    <div class="activity">抵達阿蘇站 (取車準備)</div>
                    <div class="desc">列車準時抵達阿蘇站。請準備前往租車行。</div>
                    <div class="tags"><span class="tag tag-move">抵達</span></div>
                </div>
                <div class="event">
                    <div class="time">11:40</div>
                    <div class="activity">Toyota 租車 - 阿蘇站前店 (取車)</div>
                    <div class="desc">
                        <b>租車行：：</b> Toyota Rent a Car 阿蘇站前店 (トヨタレンタカー阿蘇駅前店)。建議預留 30-45 分鐘辦理手續。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Toyota+Rent+a+Car+阿蘇駅前店" target="_blank" class="btn-map">導航至租車行</a>
                    <div class="tags"><span class="tag tag-car">Toyota</span><span class="tag tag-move">租車開始</span></div>
                </div>
                <div class="event event-meal optimized">
                    <div class="time">12:20</div>
                    <div class="activity" style="color: var(--secondary);">午餐時段：阿蘇赤牛丼 (精簡)</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li>**赤牛丼：** 推薦前往 **いまきん食堂** (需自駕，約 15-20 分鐘)。因需控制時間，建議事先電話預約，或選擇人潮較少的同類型餐廳，**將用餐時間控制在 60 分鐘內**。</li>
                        </ul>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=いまきん食堂+阿蘇" target="_blank" class="btn-map">導航至 いまきん食堂</a>
                     <div class="tags"><span class="tag tag-food">時間緊湊</span><span class="tag tag-car">需自駕</span></div>
                </div>
                 <div class="event optimized">
                    <div class="time">13:40</div>
                    <div class="activity" style="color: var(--secondary);">阿蘇神社 (Aso Shrine)</div>
                    <div class="desc">
                        抵達神社並參觀門前町，**建議停留時間約 45 分鐘**。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Aso+Shine" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-shrine">停留 45分</span></div>
                </div>
                <div class="event optimized">
                    <div class="time">14:45</div>
                    <div class="activity" style="color: var(--secondary);">草千里咖啡烘焙坊 (Kusasenri)</div>
                    <div class="desc">
                        欣賞阿蘇火山群與草千里放牧美景，並享用咖啡。**建議停留時間約 60 分鐘**，避免逗留過久。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kusasenri+Coffee+Roastery" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-spot">停留 60分</span></div>
                </div>
                <div class="event optimized">
                    <div class="time">16:00</div>
                    <div class="activity" style="color: var(--secondary);">阿蘇大觀峰 (Daikanbo Lookout)</div>
                    <div class="desc">
                        眺望阿蘇五岳「涅槃像」絕景，停車場旁有伴手禮與點心店。
                        <span style="color:var(--danger); font-weight: 600;">***重要：請務必在 17:05 前上車出發***</span>。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Daikanbo+Lookout" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-spot">景觀</span></div>
                </div>
                <div class="event optimized">
                    <div class="time">17:05</div>
                    <div class="activity" style="color: var(--danger); font-weight: 700;">前往黑川溫泉 (自駕 55分)</div>
                    <div class="desc">
                        <span style="color:var(--danger); font-weight: 600;">⚠️ 山路駕駛請小心：：</span> 冬季山路，請勿超速並注意安全。
                    </div>
                    <div class="tags"><span class="tag tag-move">準時出發！</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time" style="color: var(--primary); font-weight: 700;">18:00</div>
                    <div class="activity" style="color: var(--primary); font-weight: 700;">成功抵達黑川溫泉旅館</div>
                    <div class="desc">辦理入住手續，放鬆休息。</div>
                    <div class="info-detail-box" style="border: 1px dashed #10B981; margin-top: 15px;">
                        <h4 style="color:#10B981;">👉 旅館導航資訊 (電話)</h4>
                        <div class="info-grid">
                            <div class="info-label">麓旅館</div>
                            <div class="info-val">0967-44-0103</div>
                        </div>
                        <div class="info-grid">
                            <div class="info-label">湯本莊</div>
                            <div class="info-val">0967-44-0211</div>
                        </div>
                        <span style="display: block; font-size: 0.8rem; color: #666; margin-top: 5px;">建議使用電話號碼輸入車用導航。</span>
                    </div>
                </div>
                <div class="event event-meal">
                    <div class="time">19:00</div>
                    <div class="activity">晚餐: 旅館會席料理</div>
                    <div class="desc">在旅館享用精緻的日式會席晚餐 (通常晚餐時間為 18:30-19:30)。</div>
                    <div class="tags"><span class="tag tag-stay">溫泉旅館</span><span class="tag tag-food">已包含</span></div>
                </div>
                <div class="event">
                    <div class="time">21:00</div>
                    <div class="activity">黑川溫泉街 夜間散策 (極推薦)</div>
                    <div class="desc">
                        穿著浴衣，漫步於點綴著柔和燈籠的溫泉街。氣氛寧靜，非常適合放鬆。
                        <span style="display:block; margin-top: 5px;">⚠️ 請注意冬季保暖，並確保孩子腳步安全。</span>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kurokawa+Onsen+Town" target="_blank" class="btn-map">溫泉街中心導航</a>
                    <div class="tags"><span class="tag tag-relax">放鬆</span><span class="tag tag-kids">親子體驗</span></div>
                </div>
            </div>
        </div>

        <!-- Day 3 -->
        <div class="day-wrapper">
            <div class="day-toggle" id="toggle-d3" onclick="toggleTimeline('d3', this)">
                <div class="day-info">
                    <h3>Day 3: 別府海地獄、野生動物園 & 由布院</h3>
                    <span>1/27 (二) • 住宿: 由布院</span>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div id="d3" class="timeline">
                <div class="alert-box" style="background: var(--beppu-bg); border: 1px solid var(--beppu-info); color: #075985;">
                    <span>♨️</span> 
                    <div><b>行程提示：：</b>海地獄已加入此行程！您將從黑川溫泉出發，**在前往由布院的途中經過別府並參觀海地獄**，完美串聯行程。</div>
                </div>
                <div class="event event-meal">
                    <div class="time">08:00</div>
                    <div class="activity">早餐: 旅館內享用</div>
                    <div class="desc">享用黑川溫泉旅館豐盛的日式早餐。</div>
                     <div class="tags"><span class="tag tag-stay">溫泉旅館</span><span class="tag tag-food">已包含</span></div>
                </div>
                <div class="event">
                    <div class="time">09:30</div>
                    <div class="activity">黑川溫泉散策 & Check-out</div>
                    <div class="desc">在退房前購買「入湯手形」逛溫泉街，享受早晨的寧靜。</div>
                    <div class="tags"><span class="tag tag-relax">散步</span></div>
                </div>
                <div class="event">
                    <div class="time">11:00</div>
                    <div class="activity">移動至別府地獄區 (自駕 1小時30分)</div>
                    <div class="desc">車程較長，建議準備好孩子的零食和娛樂。</div>
                    <div class="tags"><span class="tag tag-move">移動</span><span class="tag tag-car">高速/山路</span></div>
                </div>
                <div class="event">
                    <div class="time" style="color: var(--beppu-info); font-weight: 700;">12:30</div>
                    <div class="activity" style="color: var(--beppu-info); font-weight: 700;">抵達 別府 海地獄 (Umi Jigoku)</div>
                    <div class="desc">
                        地獄巡禮中最夢幻的一處！因佔地較大，建議停留約 **75分鐘**。
                        <ul style="list-style-type: disc; margin-top: 5px; padding-left: 20px;">
                            <li>**必看：：** 鈷藍色的溫泉水、熱帶睡蓮池（鬼蓮）、溫泉雞蛋。</li>
                            <li>**備案：：** 海地獄旁的 **灶地獄（Kamado Jigoku）** 也很推薦，以多種顏色的溫泉和飲用溫泉聞名，若時間許可可一併參觀（多加 30 分鐘）。</li>
                        </ul>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=別府+海地獄" target="_blank" class="btn-map">導航至海地獄</a>
                    <div class="tags"><span class="tag tag-beppu">別府地獄</span><span class="tag tag-spot">景觀</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time">13:45</div>
                    <div class="activity">午餐時段：地獄周邊輕食/移動中</div>
                    <div class="desc">
                         <ul style="list-style-type: disc;">
                            <li><b>地獄蒸料理/溫泉蛋：：</b> 在地獄區快速購買輕食 (如溫泉蛋或地獄蒸布丁) 當作午餐。</li>
                            <li><b>動物園園內餐廳：：：</b> 若在地獄區未用餐，則直接前往動物園在園內用餐。</li>
                        </ul>
                    </div>
                     <div class="tags"><span class="tag tag-food">選擇午餐</span></div>
                </div>
                <div class="event">
                    <div class="time">14:30</div>
                    <div class="activity">抵達 九州自然動物公園 (African Safari)</div>
                    <div class="desc">從地獄區自駕約 15-20 分鐘可抵達。停車場很大，請留意路標。</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=African+Safari+Oita" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-move">抵達</span></div>
                </div>
                <div class="event">
                    <div class="time">14:30 - 17:30</div>
                    <div class="activity">九州自然動物公園 (3小時遊玩)</div>
                    <div class="desc">
                        **時間建議：** 自駕觀賞 (30分鐘) + 叢林巴士 (50分鐘) + 親近區 (1小時30分鐘)。
                        **請務必提早預約叢林巴士場次，並安排在 15:00 左右開始。** 詳情請見「旅遊資訊」頁籤。
                    </div>
                    <button class="btn-ai-guide" onclick="askGeminiGuide('九州自然動物公園', '請用誇張有趣的語氣，告訴孩子等一下會看到獅子老虎就在車子旁邊，並提醒他們要注意看什麼動物的牙齒。')">
                        ✨ 啟動探險模式
                    </button>
                    <div class="tags"><span class="tag tag-kids">親子必遊</span><span class="tag tag-spot">動物園</span></div>
                </div>
                <div class="event">
                    <div class="time">17:30</div>
                    <div class="activity">前往由布院溫泉 (山燈館)</div>
                    <div class="desc">車程約 40分鐘，天色已暗，請小心駕駛。</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Yufuin+Santoukan" target="_blank" class="btn-map">導航至山燈館</a>
                    <div class="tags"><span class="tag tag-move">移動</span><span class="tag tag-stay">住宿確認</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time">18:30</div>
                    <div class="activity">晚餐: 旅館會席料理</div>
                    <div class="desc">由布院旅館費用通常包含精緻的日式會席晚餐，請盡情享受！</div>
                    <div class="tags"><span class="tag tag-stay">溫泉旅館</span><span class="tag tag-food">已包含</span></div>
                </div>
                <div class="event">
                    <div class="time">20:30</div>
                    <div class="activity">由布院溫泉區 悠閒散步</div>
                    <div class="desc">
                        湯之坪街道店家多已打烊，但夜晚的由布院安靜且星空清晰。可散步至金鱗湖欣賞夜色，或在旅館休息。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kinrin+Lake" target="_blank" class="btn-map">金鱗湖方向導航</a>
                    <div class="tags"><span class="tag tag-relax">放鬆</span></div>
                </div>
            </div>
        </div>

        <!-- Day 4 -->
        <div class="day-wrapper">
            <div class="day-toggle" id="toggle-d4" onclick="toggleTimeline('d4', this)">
                <div class="day-info">
                    <h3>Day 4: 由布院至福岡</h3>
                    <span>1/28 (三) • 住宿: 福岡</span>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div id="d4" class="timeline">
                <div class="event event-meal">
                    <div class="time">08:00</div>
                    <div class="activity">早餐: 旅館內享用</div>
                    <div class="desc">享用由布院旅館的豐盛早餐。</div>
                    <div class="tags"><span class="tag tag-stay">旅館</span><span class="tag tag-food">已包含</span></div>
                </div>
                <div class="event">
                    <div class="time">09:30</div>
                    <div class="activity">金鱗湖 & 湯之坪街道</div>
                    <div class="desc">晨霧美景，街道上有史努比茶屋、Miffy麵包店。</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kinrin+Lake" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-kids">好逛</span></div>
                </div>
                
                <!-- COMICO ART MUSEUM INSERTED HERE -->
                <div class="event">
                    <div class="time">11:00</div>
                    <div class="activity">COMICO ART MUSEUM YUFUIN</div>
                    <div class="desc">
                        由隈研吾設計的現代美術館，展出草間彌生等大師作品，建築與由布岳景觀融合，非常值得一訪。
                        <span style="display:block; font-size: 0.8rem; color: #666; margin-top: 5px;">*建議事先上網預約購票。</span>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=COMICO+ART+MUSEUM+YUFUIN" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-spot">藝術</span><span class="tag tag-spot">建築</span></div>
                </div>

                <div class="event event-meal">
                    <div class="time">12:30</div>
                    <div class="activity">午餐時段：由布院必吃釜飯</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>由布まぶし 心 (由布釜飯)：：</b> 超人氣排隊名店，推薦豐後牛釜飯或地雞釜飯，一鍋三吃（原味、加佐料、茶泡飯）。建議提前排隊或避開尖峰。</li>
                            <li><b>湯之坪街道小吃：：</b> 若不想久候，可選擇沿街吃豐後牛串燒、可樂餅等。</li>
                        </ul>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Yufu+Mabushi+Shin" target="_blank" class="btn-map">導航至由布釜飯</a>
                    <div class="tags"><span class="tag tag-food">選擇午餐</span><span class="tag tag-spot">排隊美食</span></div>
                </div>
                <div class="event">
                    <div class="time">13:30</div>
                    <div class="activity">前往福岡市區 (開始移動)</div>
                    <div class="desc">踏上回福岡的歸途，總車程約 2.5小時。</div>
                    <div class="tags"><span class="tag tag-move">移動</span></div>
                </div>
                
                <!-- NEW STOP: YAMADA SA -->
                <div class="event">
                    <div class="time">14:40</div>
                    <div class="activity">中途休息：山田服務區 (Yamada SA)</div>
                    <div class="desc">
                        位於高速公路上的大型休息站，環境優美，有麵包店、農產品和乾淨的洗手間。適合停車讓孩子活動筋骨。
                        <span style="display:block; font-size: 0.8rem; color: #666; margin-top: 5px;">*停留約 20 分鐘。</span>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Yamada+Service+Area+Up+Line" target="_blank" class="btn-map">導航至山田SA</a>
                    <div class="tags"><span class="tag tag-relax">休息站</span><span class="tag tag-food">補給</span></div>
                </div>
                
                <!-- 調整的還車行程 -->
                <div class="event">
                    <div class="time">16:10</div>
                    <div class="activity">市區加油 (還車前滿油)</div>
                    <div class="desc">
                        依規定需加滿油還車。建議前往附近的加油站。
                    </div>
                    <a href="https://www.google.com/maps/search/gas+station+near+Toyota+Rent+a+Car+Hakata+Station+Hakata+Exit" target="_blank" class="btn-map">搜尋附近加油站</a>
                    <div class="tags"><span class="tag tag-car">加油</span></div>
                </div>
                <div class="event">
                    <div class="time">16:30</div>
                    <div class="activity">歸還租賃車輛 (Toyota 博多駅博多口店)</div>
                    <div class="desc">
                        <b>還車點：</b> Toyota Rent a Car 博多駅博多口店。<br>
                        請務必攜帶加油收據以供查驗。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Toyota+Rent+a+Car+Hakata+Station+Hakata+Exit" target="_blank" class="btn-map">導航至還車點</a>
                    <div class="tags"><span class="tag tag-move">還車</span></div>
                </div>
                <!-- 調整結束 -->
                <div class="event">
                    <div class="time">18:00</div>
                    <div class="activity">飯店 Check-in</div>
                    <div class="desc">日航西鐵 或 休雷克蓋特。</div>
                    <div class="tags"><span class="tag tag-stay">市區飯店</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time">20:00</div>
                    <div class="activity">晚餐時段：福岡在地美食選擇</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>博多牛腸鍋 (もつ鍋)：：</b> 冬天必吃，暖胃。可選博多站附近知名店家。</li>
                            <li><b>博多拉麵：：：</b> 一蘭或一風堂本店都在福岡。</li>
                        </ul>
                    </div>
                    <div class="tags"><span class="tag tag-food">選擇晚餐</span></div>
                </div>
                <div class="event">
                    <div class="time">21:30</div>
                    <div class="activity">博多站周邊 夜間散步/補貨</div>
                    <div class="desc">
                        還車後輕鬆搭乘大眾交通工具。可前往博多運河城（水舞秀）或在飯店周邊藥妝店補給。
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Canal+City+Hakata" target="_blank" class="btn-map">運河城導航</a>
                    <div class="tags"><span class="tag tag-kids">購物</span><span class="tag tag-spot">夜景</span></div>
                </div>
            </div>
        </div>

        <!-- Day 5 -->
        <div class="day-wrapper">
            <div class="day-toggle" id="toggle-d5" onclick="toggleTimeline('d5', this)">
                <div class="day-info">
                    <h3>Day 5: 太宰府與福岡購物</h3>
                    <span>1/29 (四) • 住宿: 福岡</span>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div id="d5" class="timeline">
                <div class="event event-meal">
                    <div class="time">09:00</div>
                    <div class="activity">早餐: 飯店或博多站內</div>
                    <div class="desc">可於飯店享用，或在博多站內選購日式早餐或麵包。</div>
                     <div class="tags"><span class="tag tag-food">選擇早餐</span></div>
                </div>
                <div class="event">
                    <div class="time">09:30</div>
                    <div class="activity">太宰府天滿宮</div>
                    <div class="desc">搭西鐵前往。必吃梅枝餅，參觀表參道星巴克。</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu" target="_blank" class="btn-map">導航</a>
                </div>
                <div class="event event-meal">
                    <div class="time">12:30</div>
                    <div class="activity">午餐時段：太宰府周邊選擇</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>梅枝餅：：</b> 可當點心。</li>
                            <li><b>太宰府食堂：：</b> 表參道上有多家烏龍麵、定食餐廳。</li>
                        </ul>
                    </div>
                    <div class="tags"><span class="tag tag-food">選擇午餐</span></div>
                </div>
                <div class="event">
                    <div class="time">14:30</div>
                    <div class="activity">九州國立博物館</div>
                    <div class="desc">位於太宰府旁，壯觀的建築與展覽。</div>
                </div>
                <!-- 備案 -->
                <div class="event">
                    <div class="time">備案</div>
                    <div class="activity">福岡麵包超人兒童博物館 (雨天首選)</div>
                    <div class="desc">
                        位於博多河畔城 (Hakata Riverain) 5-6樓，與地鐵「中洲川端」站直結。
                        完全室內，適合學齡前兒童放電。
                        <span style="display:block; font-size: 0.8rem; color: #666; margin-top: 5px;">*詳情請見「旅遊資訊」頁籤。</span>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Fukuoka+Anpanman+Children's+Museum" target="_blank" class="btn-map">導航</a>
                    <div class="tags"><span class="tag tag-kids">親子必遊</span><span class="tag tag-spot">室內</span></div>
                </div>
                <!-- 備案結束 -->

                <div class="event">
                    <div class="time">17:00</div>
                    <div class="activity">博多運河城 / 櫛田神社</div>
                    <div class="desc">購物中心有水舞秀 (整點)。</div>
                    <div class="tags"><span class="tag tag-spot">購物</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time">20:00</div>
                    <div class="activity">晚餐時段：屋台體驗或購物中心</div>
                    <div class="desc">
                        <ul style="list-style-type: disc;">
                            <li><b>中洲屋台：：</b> 體驗福岡的路邊攤文化 (親子需注意環境)。</li>
                            <li><b>運河城內餐廳：：：</b> 選擇多樣，用餐環境較舒適。</li>
                        </ul>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Nakasu+Yatai" target="_blank" class="btn-map">屋台導航</a>
                    <div class="tags"><span class="tag tag-food">選擇晚餐</span></div>
                </div>
                <div class="event">
                    <div class="time">21:30</div>
                    <div class="activity">最終補給與回房整理</div>
                    <div class="desc">
                        在福岡市區採買最後的伴手禮和藥妝，並提前整理行李。
                    </div>
                    <div class="tags"><span class="tag tag-kids">購物</span><span class="tag tag-relax">準備返程</span></div>
                </div>
            </div>
        </div>

        <!-- Day 6 -->
        <div class="day-wrapper">
            <div class="day-toggle" id="toggle-d6" onclick="toggleTimeline('d6', this)">
                <div class="day-info">
                    <h3>Day 6: 購物與返程</h3>
                    <span>1/30 (五) • 溫暖的家</span>
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div id="d6" class="timeline">
                <div class="event event-meal">
                    <div class="time">09:00</div>
                    <div class="activity">早餐: 飯店或博多站內</div>
                    <div class="desc">最後一個早晨，輕鬆用餐。</div>
                     <div class="tags"><span class="tag tag-food">選擇早餐</span></div>
                </div>
                <div class="event">
                    <div class="time">10:00</div>
                    <div class="activity">前往 LaLaport 福岡</div>
                    <div class="desc">
                        福岡最新大型購物中心，必看 <b>1:1 實體大鋼彈立像</b>！
                        商場內還有 KidZania (需預約) 和豐富的兒童遊樂設施。
                        <span style="display:block; font-size: 0.8rem; color: #666; margin-top: 5px;">*交通：從博多站搭乘巴士或 JR 前往竹下站。</span>
                    </div>
                    <button class="btn-ai-guide" onclick="askGeminiGuide('RX-93ff ν鋼彈', '簡單介紹這個巨大的機器人有多高（用幾層樓比喻），以及他為什麼要站在這裡保護大家。')">
                        ✨ 介紹巨型機器人
                    </button>
                     <a href="https://www.google.com/maps/search/?api=1&query=LaLaport+Fukuoka" target="_blank" class="btn-map">導航至 LaLaport</a>
                    <div class="tags"><span class="tag tag-spot">鋼彈</span><span class="tag tag-kids">親子必遊</span><span class="tag tag-shop">購物</span></div>
                </div>
                <div class="event event-meal">
                    <div class="time">12:30</div>
                    <div class="activity">午餐時段：LaLaport 美食街</div>
                    <div class="desc">
                        美食街選擇非常多樣，有九州在地美食也有知名連鎖店，環境寬敞適合親子。
                    </div>
                    <div class="tags"><span class="tag tag-food">選擇午餐</span></div>
                </div>
                <div class="event">
                    <div class="time">14:30</div>
                    <div class="activity">返回博多站 & AMU PLAZA 伴手禮採買</div>
                    <div class="desc">
                         回到博多站領取行李前，務必在 **AMU PLAZA** 或 **Ming** 商店街採購最後的伴手禮！(詳見旅遊資訊)
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=AMU+PLAZA+Hakata" target="_blank" class="btn-map">導航至 AMU PLAZA</a>
                    <div class="tags"><span class="tag tag-shop">伴手禮</span><span class="tag tag-move">移動</span></div>
                </div>
                <div class="event">
                    <div class="time">16:00</div>
                    <div class="activity">前往福岡機場 (FUK)</div>
                    <div class="desc">搭乘地鐵空港線，約 5-10 分鐘即可抵達機場。</div>
                </div>
                <div class="event">
                    <div class="time">19:10</div>
                    <div class="activity">班機起飛</div>
                    <div class="desc">星宇航空 往台北 (TPE)。</div>
                    <div class="tags"><span class="tag tag-move">返程</span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 2: 住宿資訊 (Updated Day 3) -->
    <div id="view-stay" class="container">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 1: 熊本</div>
                <div class="tag tag-stay">市區</div>
            </div>
            <div class="info-grid">
                <div class="info-label">飯店名稱</div>
                <div class="info-val">THE BLOSSOM KUMAMOTO</div>
            </div>
            <div class="info-grid">
                <div class="info-label">特色</div>
                <div class="info-val">新穎、位於車站旁、交通最便利</div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+KUMAMOTO" target="_blank" class="btn-link">開啟地圖</a>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 2: 黑川溫泉 (兩備選比較)</div>
                <div class="tag tag-stay">溫泉鄉</div>
            </div>
            
            <div class="info-detail-box">
                <h4>備選 A: 麓旅館 (Fumoto Ryokan)</h4>
                 <div class="info-grid">
                    <div class="info-label">地址</div>
                    <div class="info-val">熊本県阿蘇郡南小国町満願寺6618</div>
                </div>
                 <div class="info-grid">
                    <div class="info-label">特色</div>
                    <div class="info-val">湯池數量最多 (15個)，原始野趣風格，適合探索。</div>
                </div>
                <a href="tel:0967440103" class="btn-link-tel">撥打 0967-44-0103 (導航電話)</a>
                <a href="https://www.google.com/maps/search/?api=1&query=麓旅館+黑川溫泉" target="_blank" class="btn-link-sub">開啟 Google 地圖導航 📍</a>
                <div style="font-size: 0.8rem; color: #9CA3AF; margin-top: 5px;">*從阿蘇大觀峰出發約 55 分鐘。</div>
            </div>

            <div class="info-detail-box" style="margin-top: 15px; border-color: #F59E0B;">
                <h4 style="color: #F59E0B;">備選 B: 湯本莊 (Yumoto So)</h4>
                 <div class="info-grid">
                    <div class="info-label">地址</div>
                    <div class="info-val">熊本県阿蘇郡南小国町満願寺6692</div>
                </div>
                 <div class="info-grid">
                    <div class="info-label">特色</div>
                    <div class="info-val">溫泉街核心，以獨特的「洞窟風呂」聞名。</div>
                </div>
                <a href="tel:0967440211" class="btn-link-tel">撥打 0967-44-0211 (導航電話)</a>
                <a href="https://www.google.com/maps/search/?api=1&query=湯本莊+黑川溫泉" target="_blank" class="btn-map">開啟 Google 地圖導航 📍</a>
                <div style="font-size: 0.8rem; color: #9CA3AF; margin-top: 5px;">*從阿蘇大觀峰出發約 55 分鐘。</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 3: 由布院 (已確認)</div>
                <div class="tag tag-stay">溫泉旅館</div>
            </div>
            <div class="info-detail-box">
                <h4 style="color: #F59E0B;">湯布院 山燈館 (Santoukan)</h4>
                <div class="info-grid">
                    <div class="info-label">地址</div>
                    <div class="info-val">大分県由布市湯布院町川上1553</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">特色</div>
                    <div class="info-val">純日式京風旅館，位於金鱗湖附近，擁有檜木露天風呂。</div>
                </div>
                <a href="tel:0977845310" class="btn-link-tel">撥打 0977-84-5310 (導航電話)</a>
                <a href="https://www.google.com/maps/search/?api=1&query=Yufuin+Santoukan" target="_blank" class="btn-link-sub">開啟 Google 地圖導航 📍</a>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 4-5: 福岡</div>
                <div class="tag tag-stay">市區</div>
            </div>
            <div class="info-grid">
                <div class="info-label">備選 A</div>
                <div class="info-val">福岡日航西鐵</div>
            </div>
            <div class="info-grid">
                <div class="info-label">備選 B</div>
                <div class="info-val">休雷克蓋特 (Hotel Croom)</div>
            </div>
             <a href="https://www.google.com/maps/search/?api=1&query=Hakata+Station+Area+Hotels" target="_blank" class="btn-link">開啟地圖</a>
        </div>
    </div>

    <!-- TAB 3: 交通資訊 -->
    <div id="view-car" class="container">
        <!-- 航班資訊 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">航班資訊 (熊本進/福岡出)</div>
                <div class="tag tag-flight">星宇航空</div>
            </div>
            <div class="info-detail-box">
                <h4>去程：1/25 台北(TPE) → 熊本(KMJ)</h4>
                <div class="info-grid">
                    <div class="info-label">班次參考</div>
                    <div class="info-val">JX846</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">起飛時間</div>
                    <div class="info-val">07:30 (TPE)</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">起飛航廈</div>
                    <div class="info-val">TPE T2 (桃園機場第二航廈)</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">抵達時間</div>
                    <div class="info-val">11:00 (KMJ 當地時間)</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">抵達航廈</div>
                    <div class="info-val">KMJ 國際線航廈</div>
                </div>
            </div>
            <div class="info-detail-box" style="margin-top: 15px;">
                <h4>回程：1/30 福岡(FUK) → 台北(TPE)</h4>
                <div class="info-grid">
                    <div class="info-label">班次參考</div>
                    <div class="info-val">JX847</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">起飛時間</div>
                    <div class="info-val">19:10 (FUK 當地時間)</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">起飛航廈</div>
                    <div class="info-val">FUK 國際線航廈</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">抵達時間</div>
                    <div class="info-val">20:40 (TPE 當地時間)</div>
                </div>
                <div class="info-grid">
                    <div class="info-label">抵達航廈</div>
                    <div class="info-val">TPE T2 (桃園機場第二航廈)</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <div class="card-title">租車資訊 (Day 2-4)</div>
                <div class="tag tag-car">Toyota</div>
            </div>
            <div class="info-grid">
                <div class="info-label">租車公司</div>
                <div class="info-val">Toyota Rent a Car</div>
            </div>
            <div class="info-grid">
                <div class="info-label">取車地點</div>
                <div class="info-val">阿蘇站前店</div>
            </div>
            <div class="info-grid">
                <div class="info-label">還車地點</div>
                <div class="info-val">博多駅博多口店</div>
            </div>
            <div class="info-grid">
                <div class="info-label">導航電話</div>
                <div class="info-val">092-441-0100</div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Toyota+Rent+a+Car+阿蘇駅前店" target="_blank" class="btn-link">導航至取車點</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Toyota+Rent+a+Car+Hakata+Station+Hakata+Exit" target="_blank" class="btn-link" style="margin-top: 5px;">導航至還車點</a>
        </div>

        <!-- 新增：自駕導航 Map Code 表格 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">📍 自駕導航 Map Code & 電話</div>
                <div class="tag tag-car">車機輸入用</div>
            </div>
            
            <div class="info-section" style="background-color: #EFF6FF; border-color: #2563EB;">
                <p style="font-size: 0.9rem; color: #1E3A8A; margin-bottom: 10px; line-height: 1.5;">
                    <b>💡 操作小撇步：</b><br>
                    日本車載導航最準確的輸入方式是 <b>「Map Code」</b>，其次是 <b>「電話號碼」</b>。<br>
                    <span style="font-size:0.85rem; opacity:0.8;">*輸入電話時請包含區碼 (例如 0967...)，不需輸入國碼 +81。</span>
                </p>

                <div class="price-table" style="grid-template-columns: 1.2fr 1fr 1fr;">
                    <div class="price-header" style="color:#1D4ED8; border-color:#1D4ED8;">地點</div>
                    <div class="price-header" style="color:#1D4ED8; border-color:#1D4ED8;">Map Code</div>
                    <div class="price-header" style="color:#1D4ED8; border-color:#1D4ED8;">電話搜尋</div>
                    
                    <!-- Day 2 (修正：加入 grid-column: 1 / -1 讓標題橫跨整排，不再導致錯位) -->
                    <div class="price-item" style="grid-column: 1 / -1; font-weight:700; color:#1D4ED8; background:#DBEAFE; text-align: center; margin-top: 5px; border-radius: 4px;">Day 2: 阿蘇 & 黑川</div>
                    
                    <div class="price-item"><b>Toyota 阿蘇站前</b></div>
                    <div class="price-item" style="font-family:monospace; font-weight:700;">256 640 874*26</div>
                    <div class="price-item">0967-35-5511</div>

                    <div class="price-item"><b>いまきん食堂 (午餐)</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0967-32-0031</div>

                    <div class="price-item"><b>阿蘇神社</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0967-22-0064</div>

                    <div class="price-item"><b>草千里 (火山博物館)</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0967-34-1600</div>

                    <div class="price-item"><b>大觀峰展望所</b></div>
                    <div class="price-item" style="font-family:monospace; font-weight:700;">256 878 354*82</div>
                    <div class="price-item">-</div>

                    <div class="price-item"><b>黑川溫泉 (旅館組合)</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0967-44-0076</div>

                    <!-- Day 3 (修正排版) -->
                    <div class="price-item" style="grid-column: 1 / -1; font-weight:700; color:#1D4ED8; background:#DBEAFE; text-align: center; margin-top: 10px; border-radius: 4px;">Day 3: 別府 & 由布院</div>

                    <div class="price-item"><b>海地獄 (別府)</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0977-66-0121</div>

                    <div class="price-item"><b>九州自然動物公園</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0978-48-2331</div>

                    <div class="price-item"><b>由布院 山燈館</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0977-84-5310</div>

                    <!-- Day 4 (修正排版) -->
                    <div class="price-item" style="grid-column: 1 / -1; font-weight:700; color:#1D4ED8; background:#DBEAFE; text-align: center; margin-top: 10px; border-radius: 4px;">Day 4: 還車</div>

                    <div class="price-item"><b>山田 SA (休息站)</b></div>
                    <div class="price-item">-</div>
                    <div class="price-item">0946-52-3100</div>

                    <div class="price-item"><b>Toyota 博多站博多口</b></div>
                    <div class="price-item" style="font-family:monospace; font-weight:700;">13 320 557*33</div>
                    <div class="price-item">092-432-0100</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 2 (1/26) 必搭：阿蘇男孩!</div>
                <div class="tag tag-move">觀光列車</div>
            </div>
             <div class="info-grid">
                <div class="info-label">車次</div>
                <div class="info-val">ASO BOY! 1號</div>
            </div>
            <div class="info-grid">
                <div class="info-label">區間</div>
                <div class="info-val">熊本 (09:57) → 阿蘇 (11:27)</div>
            </div>
            
            <div class="info-detail-box">
                <h4>🐶 列車吉祥物：小黑 KURO</h4>
                <p style="font-size: 0.9rem;">KURO 是阿蘇男孩的看板犬，車內外共有**101隻不同造型的 KURO 圖案**，可以讓孩子們尋找，增添旅途樂趣！</p>
                <p style="font-size: 0.8rem; color: #9CA3AF; margin-top: 5px;"></p>
            </div>
            
            <div class="info-detail-box" style="margin-top: 15px;">
                <h4>🎉 親子娛樂設施 (第3節車廂)</h4>
                <p style="font-size: 0.9rem; margin-bottom: 5px;">
                    第3節車廂後方是兒童專屬空間，設有**木球池**（請注意開放時間）和**兒童圖書室**。
                </p>
                <p style="font-size: 0.9rem; margin-bottom: 5px;">
                    此外，還有**哺乳室**和多功能廁所，確保帶著小小孩的家長也能舒適搭乘。
                </p>
            </div>
            
            <div class="info-detail-box" style="margin-top: 15px;">
                <h4>👨‍👩‍👧‍👦 獨特全景席位</h4>
                <p style="font-size: 0.9rem; margin-bottom: 5px;">
                    **景觀車廂 (第1和第4節)**：設有全景大窗戶，視野絕佳，能欣賞阿蘇沿線風景。
                </p>
                <p style="font-size: 0.9rem;">
                    **親子座位 (White Seats)**：有面對面、附桌子的座位，非常適合家庭用餐或互動，是預訂時的首選！
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">🇯🇵 自駕與加油須知</div>
                <div class="tag tag-car">必讀</div>
            </div>
            
            <div class="info-section" style="margin-bottom: 15px;">
                <h3 style="color: var(--primary); border-bottom-color: var(--primary);">🚗 自駕重點提示</h3>
                <ul style="padding-left: 20px; font-size: 0.9rem; line-height: 1.6; color: #444;">
                    <li><b>靠左行駛：</b>日本為右駕左行，雨刷和方向燈位置通常與台灣相反（雨刷在左，方向燈在右）。轉彎時請口訣默唸「左小圈、右大圈」。</li>
                    <li><b>禮讓行人：</b>轉彎遇斑馬線有行人時，**必須完全停車**禮讓。</li>
                    <li><b>停止標誌 (止まれ)：</b>看到倒三角形紅色標誌，車輪必須**完全靜止**（數3秒）確認無車後再開，這是日本警察取締重點。</li>
                    <li><b>平交道：</b>通過前必須**完全停車**，開窗聽聲音確認無火車後再通過。</li>
                </ul>
            </div>

            <div class="info-section" style="background-color: #FFFBEB; border-color: #F59E0B;">
                <h3 style="color: #D97706; border-bottom-color: #F59E0B;">⛽ 加油站使用指南</h3>
                <div class="method-detail">
                    <p style="margin-bottom: 8px;">租車通常需<b>「加滿油還車 (満タン返し)」</b>，請保留最後一次加油收據。</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; text-align: center; margin-bottom: 10px;">
                        <div style="background:#FFCCCC; padding:5px; border-radius:5px; color:#CC0000; font-weight:bold;">紅色<br><span style="font-size:0.8rem">92無鉛<br>(Regular)</span></div>
                        <div style="background:#FFFFCC; padding:5px; border-radius:5px; color:#999900; font-weight:bold;">黃色<br><span style="font-size:0.8rem">98無鉛<br>(High Octane)</span></div>
                        <div style="background:#CCFFCC; padding:5px; border-radius:5px; color:#006600; font-weight:bold;">綠色<br><span style="font-size:0.8rem">柴油<br>(Diesel)</span></div>
                    </div>
                    <p>一般租賃轎車（如 Toyota Corolla/Yaris）通常加 <b style="color:#CC0000;">紅色 Regular (レギュラー)</b>。請務必確認租車合約。</p>
                </div>

                <!-- 新增：自助加油教學區塊 -->
                <div style="margin-top: 15px; border-top: 1px dashed #F59E0B; padding-top: 15px;">
                    <h4 style="color: #D97706; margin: 0 0 10px 0;">🤖 自助加油 (Self) 操作步驟</h4>
                    <ul class="step-list" style="padding-left: 20px;">
                        <li><b>停車熄火：</b> 認明招牌寫有「セルフ (Self)」的加油站。停妥後請務必熄火。</li>
                        <li><b>消除靜電：</b> 觸摸加油機上的「靜電除去 (靜電除去シート)」黑色觸摸板。</li>
                        <li><b>選擇支付：</b> 螢幕點選「クレジットカード (信用卡)」或「現金」。</li>
                        <li><b>選擇油種：</b> 點選紅色 <b style="color:#CC0000;">Regular (レギュラー)</b>。</li>
                        <li><b>設定油量：</b> 還車請選擇 <b style="color:#2563EB;">「満タン (滿油)」</b>。</li>
                        <li><b>加油：</b> 插入油槍，扣下扳機。跳停後請不要硬加，掛回油槍。</li>
                        <li><b>領取收據：</b> 務必領取收據 (領収書) 以供還車查驗。</li>
                    </ul>
                </div>

                <!-- 新增：付款與找零注意事項 -->
                <div style="margin-top: 15px; background: #fff; padding: 10px; border-radius: 8px; border: 1px solid #FCD34D;">
                    <h4 style="color: #B45309; margin: 0 0 5px 0; font-size: 0.95rem;">💰 付款與找零重要提示</h4>
                    <ul style="padding-left: 20px; font-size: 0.9rem; color: #444; margin-bottom: 0;">
                        <li style="margin-bottom: 5px;"><b>現金找零陷阱：</b> 部分舊式機台加油後只會吐出收據（或找零單），**不會直接吐鈔票**！需拿著單子去旁邊的<b>「精算機」</b>掃描條碼才會退錢。</li>
                        <li><b>信用卡預授權：</b> 選擇「滿油」時，系統可能會先預扣一筆金額（如1萬日圓），實際扣款會依加油量計算，無需擔心。</li>
                    </ul>
                </div>
            </div>
            
            <div class="info-section" style="margin-top: 15px; border-color: #EF4444;">
                <h3 style="color: #EF4444; border-bottom-color: #EF4444;">⛓️ 雪鍊安裝教學</h3>
                <div class="method-detail">
                    <p style="font-weight:bold; margin-bottom:5px;">⚠️ 出發前確認驅動輪 (前驅/後驅/四驅)</p>
                    <ul class="step-list" style="padding-left: 20px;">
                        <li><b>步驟 1：</b>將雪鍊攤平在輪胎後方，確認無打結。</li>
                        <li><b>步驟 2：</b>將雪鍊兩端拉起，包覆輪胎。</li>
                        <li><b>步驟 3：</b>先扣上內側掛勾 (通常在輪胎後方上方)。</li>
                        <li><b>步驟 4：</b>調整外側鍊條位置，扣上外側掛勾。</li>
                        <li><b>步驟 5：</b>使用橡皮圈或緊繃器拉緊鍊條，確保貼合輪胎。</li>
                        <li><b>步驟 6：</b>行駛約 50 公尺後停車檢查，再次拉緊。</li>
                    </ul>
                    <p style="font-size:0.85rem; color:#666; margin-top:5px;">*行駛雪鍊路段請保持時速 30-50km/h 以下。</p>
                </div>
            </div>
            
             <div class="info-section winter-drive" style="margin-top: 15px;">
                <h3>❄️ 冬季自駕與安全提示</h3>
                <p style="font-size: 0.95rem; margin-bottom: 10px; font-weight: 500;">您的行程經過阿蘇山、黑川溫泉、由布院等山區，1月下旬為冬季旺季，請務必留意：</p>
                
                <div class="info-detail-box" style="border-color: #FCA5A5; background-color: #FFF6F6;">
                    <h4 style="color: #B91C1C;">胎紋與雪鏈 (重要)</h4>
                     <p class="method-detail">
                        <span style="font-weight: 600; color: #B91C1C;">雪胎：</span> 請務必與租車公司確認您的車輛是否配備**雪胎 (Snow Tires)**。若無雪胎，可能無法進入部分積雪的山區。
                    </p>
                    <p class="method-detail" style="margin-top: 5px;">
                        <span style="font-weight: 600; color: #B91C1C;">雪鏈：</span> 在租車時，確認是否備有雪鏈並知道如何使用。部分路段如遇大雪，會強制要求加裝雪鏈。
                    </p>
                </div>
                
                <div class="info-detail-box" style="margin-top: 15px; border-color: #FCA5A5; background-color: #FFF6F6;">
                    <h4 style="color: #B91C1C;">山區駕車時間</h4>
                     <p class="method-detail">
                        **黑川至別府/由布院：** 山路較多，下午 5 點後天色會完全變暗。Day 3 的行程需要跨越山區，請盡量在白天完成大部分移動。
                    </p>
                     <p class="method-detail" style="margin-top: 5px;">
                        **結冰風險：** 早晨或深夜，橋樑和山區背光路段容易結冰，請減速慢行，與前車保持安全距離。
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 4: 旅遊資訊 -->
    <div id="view-info" class="container">
        
        <!-- 熊本 上/下通 攻略 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 1: 熊本 上通/下通 逛街攻略</div>
                <div class="tag tag-shop">購物美食</div>
            </div>

            <div class="info-section kumamoto">
                <h3>🛍️ 上通 (Kamitori) 與 下通 (Shimodori)</h3>
                <p style="font-size: 0.95rem;">
                    這是熊本最主要的兩條拱廊商店街，皆為室內空間，即使下雨也不怕。搭乘熊本市電至「通町筋」或「辛島町」站即可到達核心區域。
                </p>

                <div class="safari-method" style="border-color: #90CDF4; margin-top: 15px;">
                    <span class="method-title" style="color: var(--kumamoto-info-text);">上通 (北段) - 悠閒與質感</span>
                    <div class="method-detail">
                        <p>上通偏向**文青、精品、咖啡廳**和**本地老店**，氣氛相對安靜優雅。適合想找特色小店、書店或喝下午茶的家庭。</p>
                        <ul style="list-style-type: disc; margin-top: 5px; padding-left: 20px;">
                            <li>**重點店家：** 鶴屋百貨、個性雜貨店、書店。</li>
                            <li>**備註：** 這裡連接著熊本城，通常從熊本城方向走過來是第一站。</li>
                        </ul>
                    </div>
                </div>

                <div class="safari-method" style="margin-top: 15px; border-color: #90CDF4;">
                    <span class="method-title" style="color: var(--kumamoto-info-text);">下通 (南段) - 庶民與美食</span>
                    <div class="method-detail">
                        <p>下通是最熱鬧的一段，以**藥妝店、服飾連鎖店、電玩店**和**餐飲店**為主，充滿庶民活力。大部分知名的熊本拉麵店（如天外天）和豬排店（如勝烈亭）都在附近巷弄中。</p>
                        <ul style="list-style-type: disc; margin-top: 5px; padding-left: 20px;">
                            <li>**重點店家：** 唐吉訶德（ドンキ）、大型藥妝店、電影院。</li>
                            <li>**備註：** 這裡靠近辛島町，可搭乘市電返回熊本站，交通便利。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 新增：Day 2 黑川溫泉散步攻略 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 2: 黑川溫泉 散策與入湯手形</div>
                <div class="tag tag-relax">溫泉氣氛</div>
            </div>

            <div class="info-section" style="background-color: #FDF4F1; border-color: #78350F;">
                <h3 style="color: #78350F; border-bottom-color: #78350F;">♨️ 入湯手形 (Onsen Hopping Pass)</h3>
                <p style="font-size: 0.95rem; color: #444;">
                    這是黑川溫泉最大的特色！只要購買一枚木製的「入湯手形」(約 1,500円)，即可任選 3 間旅館的露天溫泉泡湯。
                </p>
                <div class="safari-method" style="margin-top: 10px; border-color: #78350F;">
                    <span class="method-title" style="color: #78350F;">使用小撇步</span>
                    <div class="method-detail">
                        <ul style="padding-left: 20px; line-height: 1.6;">
                            <li><b>作為紀念品：</b>使用完畢後，手形可以蓋上印章帶回家當杯墊或掛飾，非常有質感。</li>
                            <li><b>優惠折扣：</b>掛著手形在溫泉街上的部分商店消費或用餐，出示可享折扣。</li>
                            <li><b>推薦湯池：</b>除了您住宿的旅館外，推薦體驗「山梅花 (Yamamizuki)」的溪流露天風呂，或「新明館」的洞窟風呂。</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="info-section" style="margin-top: 15px;">
                <h3>🌲 溫泉街必吃與氛圍</h3>
                <p style="font-size: 0.9rem; margin-bottom: 10px;">
                    黑川全村為了維護景觀，建築統一使用黑色與木質調，沒有霓虹燈，只有柔和的燈籠，非常適合穿著浴衣拍照。
                </p>
                <div class="price-table">
                    <div class="price-header" style="color: #78350F; border-color: #78350F;">必吃甜點</div>
                    <div class="price-header" style="color: #78350F; border-color: #78350F;">特色</div>
                    <div class="price-header" style="color: #78350F; border-color: #78350F;">位置</div>
                    
                    <div class="price-item"><b>Patisserie Roku</b></div>
                    <div class="price-item">超人氣「鹽麴泡芙」，外皮酥脆內餡濃郁。</div>
                    <div class="price-item">地藏堂附近</div>
                    
                    <div class="price-item"><b>白玉子 (白玉ッ子)</b></div>
                    <div class="price-item">現煮白玉湯圓，口感Q彈，搭配黑蜜黃豆粉。</div>
                    <div class="price-item">川端通</div>
                    
                    <div class="price-item"><b>銅鑼燒 (Dora Dora)</b></div>
                    <div class="price-item">夾著布丁或冰淇淋的創意銅鑼燒。</div>
                    <div class="price-item">溫泉街中心</div>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Patisserie+Roku+Kurokawa" target="_blank" class="btn-link" style="background-color: #78350F;">導航至 Patisserie Roku 🍰</a>
            </div>
        </div>

        <!-- 新增：Day 3/4 由布院散步攻略 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 3-4: 由布院 湯之坪街道攻略</div>
                <div class="tag tag-spot">超好逛</div>
            </div>

            <div class="info-section" style="background-color: #F0FDF4; border-color: #15803D;">
                <h3 style="color: #15803D; border-bottom-color: #15803D;">🚶 經典散步路線</h3>
                <p style="font-size: 0.95rem; color: #444;">
                    從由布院車站出來，沿著正前方的道路直走，雖然會看到壯觀的由布岳，但精華區其實在右前方的<b>「湯之坪街道」</b>。
                </p>
                <div class="method-detail" style="margin-top: 10px;">
                    <p><b>建議動線：</b> 車站 → B-speak (蛋糕捲) → 湯之坪街道 (主戰場) → Floral Village (童話村) → 金鱗湖。</p>
                    <p style="margin-top:5px; font-size:0.85rem; color:#666;">*全程步行單趟約 20-30 分鐘 (不含逛街)，沿路非常平坦好走，適合推車。</p>
                </div>
            </div>

            <div class="info-section" style="margin-top: 15px;">
                <h3>🍰 排隊美食 & 特色店鋪</h3>
                
                <div class="safari-method" style="margin-top: 10px;">
                    <span class="method-title" style="color: var(--primary);">B-speak 蛋糕捲 (P-roll)</span>
                    <div class="method-detail">
                        由布院最知名的甜點！口感蓬鬆蛋香濃郁。
                        <br><span style="color: var(--danger); font-weight:bold;">⚠️ 注意：</span> 小條裝通常早上 10:30 前就會賣光。若想買，建議第一天抵達時先去預訂隔天取貨，或一早去排隊。
                    </div>
                </div>

                <div class="safari-method" style="margin-top: 10px;">
                    <span class="method-title" style="color: var(--primary);">Milch (ミルヒ) 起司杯</span>
                    <div class="method-detail">
                        必吃！推薦點<b>「熱的 (Hot)」</b>起司蛋糕杯，半熟流心的口感非常銷魂。也有冷的可以選擇。
                    </div>
                </div>

                <div class="safari-method" style="margin-top: 10px;">
                    <span class="method-title" style="color: var(--primary);">金賞可樂餅 (金賞コロッケ)</span>
                    <div class="method-detail">
                        曾獲全日本可樂餅大賽金賞。外皮酥脆，內餡調味較重，適合邊走邊吃。
                    </div>
                </div>

                <div class="info-detail-box" style="margin-top: 15px; border-color: #F472B6; background-color: #FFF1F2;">
                    <h4 style="color: #DB2777;">🍄 Yufuin Floral Village (童話村)</h4>
                    <p style="font-size: 0.9rem;">
                        仿照英國科茨沃爾德 (Cotswolds) 打造的黃色矮房聚落。這裡有：
                    </p>
                    <ul style="padding-left: 20px; font-size: 0.9rem; margin-top: 5px;">
                        <li><b>Miffy 麵包店：</b>造型麵包超可愛，二樓有咖啡廳。</li>
                        <li><b>龍貓商店 (どんぐりの森)：</b>吉卜力粉絲必逛。</li>
                        <li><b>動物餵食：</b>園區內有養山羊、兔子甚至松鼠，小朋友會很愛。</li>
                    </ul>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Yufuin+Floral+Village" target="_blank" class="btn-link">導航至童話村 📍</a>
            </div>
        </div>


        <!-- 九州自然動物公園 攻略 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">Day 3: 九州自然動物公園 (攻略)</div>
                <div class="tag tag-tip">重點資訊</div>
            </div>

            <!-- 門票資訊 -->
            <div class="info-section" style="border-color: #F59E0B;">
                <h3 style="color: var(--secondary);">💰 門票與費用 (參考)</h3>
                <div class="price-table">
                    <div class="price-header">項目</div>
                    <div class="price-header">成人</div>
                    <div class="price-header">4歲~中學生</div>
                    
                    <div class="price-item">入園費</div>
                    <div class="price-item">¥2,600</div>
                    <div class="price-item">¥1,500</div>
                    
                    <div class="price-item">叢林巴士 (Jungle Bus)</div>
                    <div class="price-item">¥1,400</div>
                    <div class="price-item">¥1,200</div>
                    
                    <div class="price-item" style="font-weight: 700;">自駕車導覽收音機</div>
                    <div class="price-item" colspan="2">¥600 (每台車)</div>
                </div>
                <p class="detail" style="margin-top: 10px; font-size: 0.85rem; color: var(--danger);">
                    **費用總計：** 若選擇「入園 + 叢林巴士」，每位成人約 ¥4,000。
                </p>
            </div>
            
            <!-- 叢林巴士預約教學 -->
            <div class="info-section">
                <h3>🚌 叢林巴士 (Jungle Bus) 預約教學</h3>
                 
                <p style="font-size: 0.95rem; font-weight: 600;">
                    叢林巴士是必玩項目！建議您提前預約，以確保有位子，特別是週末或假期。
                </p>
                <ol style="font-size: 0.9rem; margin-top: 10px; padding-left: 20px;">
                    <li>**線上預約 (推薦)：：** 官方網站通常會在出發日期的前 1 個月左右開放預約。選擇日期與時段，線上付費。</li>
                    <li>**當日現場購票：：** 如果無法線上預訂，請務必在**一開園時**（或預計抵達時）立刻前往售票處購買當日的場次。熱門時段容易客滿。</li>
                    <li>**選擇時段：：** 建議選擇剛入園後的時段（約 14:30-15:30），以免耽誤後續前往由布院的行程。</li>
                </ol>
            </div>


            <!-- 混合體驗建議 -->
            <div class="info-section" style="background-color: #FFFBEB; border-color: var(--secondary);">
                <h3 style="color: var(--secondary);">🚗 如何兼顧自駕與叢林巴士 (完美體驗路線)</h3>
                <p style="font-size: 0.95rem;">
                    想要完整體驗動物園，建議將自駕觀賞與巴士餵食結合：
                </p>
                
                <div class="safari-method" style="border-color: var(--secondary);">
                    <span class="method-title" style="color: var(--secondary);">步驟一：自駕體驗 (免費，需租借導覽機)</span>
                    <div class="method-detail">
                        <p>
                            **先開您自己的租賃車**進入 Safari Zone 逛一圈。這樣可以從容地用自己的速度觀賞動物，且車內空間大較為舒適。
                        </p>
                        <p style="margin-top: 5px;">
                            **優點：** 感受動物靠近車輛的震撼感，不受時間限制。
                        </p>
                    </div>
                </div>
                
                <div class="safari-method" style="margin-top: 15px; border-color: var(--danger);">
                    <span class="method-title recommended" style="color: var(--danger);">步驟二：叢林巴士 (餵食體驗，需預約)</span>
                    <div class="method-detail">
                        <p>
                            **隨後再搭乘叢林巴士**。巴士會在車上定點停車，讓孩子們親手將飼料從防護網餵給動物。這是自駕無法取代的互動樂趣！
                        </p>
                        <p style="margin-top: 5px;">
                            **時程安排：** 建議 14:30 抵達後，先快速自駕一圈 (約 30-40 分鐘)，再接著搭乘預約好的巴士場次 (約 50 分鐘)。
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- 親近區建議 -->
            <div class="info-section" style="margin-top: 16px;">
                 <h3>🐕 親近區 (Fureai Zone) 建議</h3>
                 <div class="method-detail">
                    <p>參觀完 Safari Zone 後，請務必到親近區走走。這裡有**袋鼠、天竺鼠**等可愛的小動物可以摸摸抱抱，還有**騎馬體驗**（需另外付費），非常適合小朋友玩樂，通常會花費 1-1.5 小時。</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=African+Safari+Oita" target="_blank" class="btn-link">查看動物公園官網 (搜尋)</a>
                </div>
            </div>
        </div>
        
        <!-- 福岡麵包超人兒童博物館 攻略 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">福岡麵包超人兒童博物館 (攻略)</div>
                <div class="tag tag-kids">親子備案</div>
            </div>
            <div class="info-section" style="border-color: #F472B6;">
                <h3 style="color: #DB2777; border-bottom-color: #F472B6;">🍞 麵包超人博物館重點</h3>
                <div class="method-detail">
                    <p>這是一個專為學齡前兒童設計的夢幻樂園，位於市中心，交通極度便利（地鐵直結）。</p>
                    <ul style="list-style-type: disc; margin-top: 10px; padding-left: 20px;">
                        <li><b>位置：</b>博多河畔城 (Hakata Riverain Mall) 5F/6F。</li>
                        <li><b>交通：</b>地鐵空港線/箱崎線「中洲川端站」6號出口直達。</li>
                        <li><b>門票：</b>1歲以上統一票價 (約 2,000-2,200円)，1歲以下免費。</li>
                    </ul>
                </div>
                
                <div class="safari-method" style="margin-top: 15px; border-color: #F472B6;">
                    <span class="method-title" style="color: #DB2777;">必玩亮點</span>
                    <div class="method-detail">
                        <ul style="padding-left: 20px;">
                            <li><b>麵包超人表演秀：</b>每天有固定場次，角色會出來跳舞互動。</li>
                            <li><b>果醬爺爺的麵包工廠：</b>必買！還原度超高的造型麵包，雖然價格稍高但非常可愛。</li>
                            <li><b>生日服務：</b>若孩子當月生日，可獲得生日貼紙和皇冠 (需向工作人員詢問)。</li>
                        </ul>
                    </div>
                </div>
                 <p class="detail" style="margin-top: 10px; font-size: 0.85rem; color: var(--danger);">
                    **注意：** 館內通常禁止飲食（嬰兒副食品除外），且嬰兒車需寄放在入口處。
                </p>
            </div>
        </div>

        <!-- 伴手禮攻略 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">🎁 福岡 & 熊本 必買伴手禮清單</div>
                <div class="tag tag-shop">購物</div>
            </div>
            
            <div class="info-section" style="border-color: #F87171;">
                <h3 style="color: #DC2626; border-bottom-color: #F87171;">🍓 福岡 (博多站/機場)</h3>
                <div class="method-detail">
                    <ul style="padding-left: 20px; line-height: 1.6;">
                        <li><b>博多通りもん (博多通饅頭)：</b>福岡No.1伴手禮，充滿奶香的白豆沙饅頭，必買！</li>
                        <li><b>Menbei (明太仙貝)：</b>福太郎推出的明太子仙貝，鹹香酥脆，適合當下酒菜。</li>
                        <li><b>努努雞 (冷炸雞)：</b>口感獨特的冰涼炸雞，適合在飯店享用或最後一天帶回 (需保冷)。</li>
                        <li><b>筑紫麻糬 (筑紫もち)：</b>淋上黑糖蜜的黃豆粉麻糬，口感精緻。</li>
                        <li><b>Tubu Tube 明太子醬：</b>管狀包裝的明太子，方便料理或塗抹麵包。</li>
                    </ul>
                </div>
            </div>

            <div class="info-section kumamoto">
                <h3 style="color: var(--kumamoto-info-text); border-bottom-color: #90CDF4;">🐻 熊本 (熊本站/城彩苑)</h3>
                <div class="method-detail">
                    <ul style="padding-left: 20px; line-height: 1.6;">
                        <li><b>譽之陣太鼓 (誉の陣太鼓)：</b>紅豆羊羹包覆求肥(麻糬)的經典甜點，包裝精美。</li>
                        <li><b>黑糖多納茲棒：</b>外酥內軟的黑糖條狀甜甜圈，配牛奶超搭。</li>
                        <li><b>武者返 (武者がえし)：</b>以熊本城石牆命名的紅豆酥皮點心。</li>
                        <li><b>熊本熊 (Kumamon) 周邊：</b>熊本限定的部長商品，在熊本站或機場都買得到。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 5: AI 助手 -->
    <div id="view-ai" class="container">
        <!-- ... existing AI Tab content ... -->
        <div class="card" style="height: calc(100vh - 140px); min-height: 500px; display: flex; flex-direction: column;">
            <div class="ai-header" id="ai-modal-title">
                <!-- 修正 1: 標題 Sparkles 換成 SVG -->
                <svg class="icon-mini" style="width: 24px; height: 24px; color: #F59E0B;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <span>隨身 AI 翻譯與助手</span>
            </div>
            
            <div class="chat-history" id="chat-history">
                <!-- Welcome Message Bubble (Injected by JS) -->
            </div>

            <div class="ai-input-group" id="ai-input-area" style="display: block; margin-top: auto;">
                <div class="ai-input-wrapper">
                    <input type="text" class="ai-input" id="ai-user-input" placeholder="請輸入內容..." onkeypress="handleEnter(event)">
                    
                    <!-- 新增：語音辨識語言切換開關 -->
                    <div class="voice-lang-switch">
                        <span style="font-weight:600; color:#9CA3AF; font-size:0.75rem; display: flex; align-items: center; gap: 4px;">
                            <svg class="icon-mini" style="width: 14px; height: 14px;" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                            誰在說話:
                        </span>
                        
                        <!-- 選項 1: 台灣 (中文) - 圓形簡約版 -->
                        <label class="lang-option" title="我 (說中文)">
                            <input type="radio" name="voice_lang" value="zh-TW" checked onchange="updatePlaceholder()">
                            <!-- Simplified Taiwan Circle Flag -->
                            <svg class="flag-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <mask id="maskTW"><circle cx="12" cy="12" r="12" fill="white"/></mask>
                                <g mask="url(#maskTW)">
                                    <rect width="24" height="24" fill="#FE0000"/>
                                    <rect width="12" height="12" fill="#000095"/>
                                    <!-- 簡化的青天白日 (同心圓風格) -->
                                    <circle cx="6" cy="6" r="3.5" fill="white"/>
                                    <circle cx="6" cy="6" r="2.5" fill="#000095"/>
                                    <circle cx="6" cy="6" r="1.5" fill="white"/>
                                </g>
                            </svg>
                        </label>
                        
                        <!-- 選項 2: 日本 (日文) - 圓形簡約版 -->
                        <label class="lang-option" title="店員 (說日文)">
                            <input type="radio" name="voice_lang" value="ja-JP" onchange="updatePlaceholder()">
                            <!-- Simplified Japan Circle Flag -->
                            <svg class="flag-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E5E7EB"/>
                                <circle cx="12" cy="12" r="5" fill="#BC002D"/>
                            </svg>
                        </label>
                    </div>

                    <div class="ai-actions-row">
                        <button class="btn-mode consult" onclick="sendToGemini('consult')">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                            行程諮詢
                        </button>
                        <button class="btn-mode trans" onclick="sendToGemini('translate')">
                            <svg viewBox="0 0 24 24"><path d="M7 10h14"></path><path d="M17 6l4 4-4 4"></path><path d="M17 14H3"></path><path d="M7 18l-4-4 4-4"></path></svg>
                            中/日翻譯
                        </button>
                        <!-- Voice Button -->
                        <button class="btn-mode voice" id="btn-voice-ja">
                            <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                            語音輸入
                        </button>
                    </div>
                </div>
            </div>
            
            <button id="btn-back-trans" class="btn-ai-reset" onclick="showAiTranslatorMode()">
                 ↩️ 返回一般模式
            </button>
        </div>
    </div>

    <!-- TAB 6: 即時天氣 (New) -->
    <div id="view-weather" class="container">
        <div class="card">
            <div class="card-header">
                <!-- 修正 1: 將 Emoji 🌍 換成簡約 SVG 地球圖示 -->
                <div class="card-title" style="display: flex; align-items: center; gap: 6px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    即時天氣查詢 & 穿衣建議
                </div>
            </div>
            
            <div class="weather-search-box">
                <input type="text" id="weather-city-input" class="weather-input" placeholder="輸入城市 (例如: 熊本, 由布院)">
                <button class="btn-weather-search" onclick="fetchRealtimeWeather()">查詢</button>
            </div>

            <!-- Main Result -->
            <div id="weather-result" style="display:none;">
                <div class="weather-card-main">
                    <div class="wc-loc" id="wc-loc">--</div>
                    <div class="wc-temp-big" id="wc-temp">--°</div>
                    <div class="wc-desc" id="wc-desc">載入中...</div>
                </div>

                <!-- Comparison Row -->
                <div class="weather-compare-row">
                    <div class="wc-mini-card" onclick="getLocalWeather()" style="cursor:pointer; background:#F9FAFB;">
                        <!-- 修正 1: 我的位置圖示 (Pin) -->
                        <div class="wc-mini-title" style="display: flex; align-items: center; justify-content: center;">
                            <svg class="icon-mini" style="color: #EF4444;" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            我的位置 (點擊更新)
                        </div>
                        <div class="wc-mini-temp" id="wc-my-temp">--°</div>
                    </div>
                    <div class="wc-mini-card">
                        <!-- 修正 2: 溫差對比圖示 (Thermometer) -->
                        <div class="wc-mini-title" style="display: flex; align-items: center; justify-content: center;">
                            <svg class="icon-mini" style="color: #3B82F6;" viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
                            溫差對比
                        </div>
                        <div id="wc-diff-tag" class="wc-diff-tag" style="display:none;">--</div>
                        <div id="wc-diff-text" style="font-size:0.8rem; color:#666; margin-top:2px;">--</div>
                    </div>
                </div>

                <!-- AI Advice -->
                <div class="advice-box">
                    <!-- 修正 3: 穿衣建議圖示 (Shirt) -->
                    <strong style="display: flex; align-items: center; gap: 4px;">
                        <svg class="icon-mini" style="color: #059669;" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
                        AI 穿衣建議：
                    </strong>
                    <div style="margin-top: 5px;" id="wc-advice">分析氣候數據中...</div>
                </div>
                
                <div style="font-size: 0.75rem; color: #9CA3AF; text-align: center; margin-top: 15px;">
                    * 天氣數據來源：Open-Meteo Real-time API<br>
                    * 穿衣建議由 Google Gemini AI 分析生成
                </div>
            </div>
            
            <!-- Default / Loading State -->
            <div id="weather-placeholder" style="text-align: center; padding: 40px; color: #9CA3AF;">
                <svg viewBox="0 0 24 24" style="width: 60px; height: 60px; stroke: #D1D5DB; fill: none; stroke-width: 1.5; margin-bottom: 10px;"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
                <div>請輸入城市名稱查詢即時天氣</div>
            </div>
        </div>
    </div>

    <!-- 自定義彈出視窗 HTML -->
    <div id="location-modal" class="modal-overlay">
        <div class="modal-box">
            <div class="modal-title">手動設定位置</div>
            <div class="modal-desc" id="modal-msg">無法取得 GPS 定位，請手動輸入您所在的城市以進行溫差比對。</div>
            <input type="text" id="modal-city-input" class="modal-input" placeholder="例如: 台北, Taichung" value="台北">
            <div class="modal-btns">
                <button class="modal-btn btn-cancel" onclick="closeModal()">取消</button>
                <button class="modal-btn btn-confirm" onclick="submitManualLocation()">確定</button>
            </div>
        </div>
    </div>

    <!-- Bottom Navigation Bar (6 items now) -->
    <nav class="nav-bar">
        <div class="nav-item active" data-target="view-schedule" onclick="switchTab(this)">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </span>
            行程表
        </div>
        <div class="nav-item" data-target="view-stay" onclick="switchTab(this)">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 22v-8c0-1.1.9-2 2-2h4v10H4c-1.1 0-2-.9-2-2zM22 22v-8c0-1.1-.9-2-2-2h-4v10h4c1.1 0 2-.9 2-2zM12 2L2 12h3v8h4v-6h6v6h4v-8h3L12 2z"></path></svg>
            </span>
            住宿資訊
        </div>
        <div class="nav-item" data-target="view-car" onclick="switchTab(this)">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17h2"/><path d="M15 17h2"/></svg>
            </span>
            交通資訊
        </div>
        <div class="nav-item" data-target="view-info" onclick="switchTab(this)">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </span>
            旅遊資訊
        </div>
        
        <!-- 調整順序: 先放天氣 -->
        <div class="nav-item" data-target="view-weather" onclick="switchTab(this)">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>
            </span>
            即時天氣
        </div>

        <!-- 調整順序: AI 助手放到最後 -->
        <div class="nav-item" data-target="view-ai" onclick="switchTab(this)">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            </span>
            AI 助手
        </div>
    </nav>

    <script>
        // API Configuration
        const apiKey = ""; // API Key injected by environment

        // Weather Data Configuration
        // Icons: Using simple SVG strings for white icons
        const weatherIcons = {
            'sun': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
            'cloud': '<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
            'cloud-sun': '<svg viewBox="0 0 24 24"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>',
            'rain': '<svg viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>',
            'snow': '<svg viewBox="0 0 24 24"><path d="M4.5 10H4a7 7 0 1 1 7-7v.5"></path><path d="M10 14a6 6 0 0 0-6-6"></path><line x1="12" y1="16" x2="12" y2="22"></line><line x1="12" y1="22" x2="9" y2="19"></line><line x1="12" y1="22" x2="15" y2="19"></line><line x1="18.5" y1="12" x2="22" y2="12"></line><line x1="22" y1="12" x2="19.5" y2="9.5"></line><line x1="22" y1="12" x2="19.5" y2="14.5"></line><line x1="5" y1="18.5" x2="2" y2="18.5"></line><line x1="2" y1="18.5" x2="4.5" y2="21"></line><line x1="2" y1="18.5" x2="4.5" y2="16"></line><line x1="17.5" y1="18.5" x2="20.5" y2="21"></line><line x1="17.5" y1="18.5" x2="20.5" y2="16"></line></svg>'
        };

        const weatherData = {
            'd1': { loc: '熊本市', date: '1/25 (Day 1)', temp: '10°C', range: '2°C ~ 11°C', desc: '晴時多雲', advice: '氣溫適中但早晚偏涼，長袖配外套。', icon: 'cloud-sun' },
            'd2': { loc: '阿蘇/黑川', date: '1/26 (Day 2)', temp: '5°C', range: '-3°C ~ 6°C', desc: '多雲/飄雪', advice: '山區極冷，務必穿著羽絨外套保暖。', icon: 'snow' },
            'd3': { loc: '別府/由布院', date: '1/27 (Day 3)', temp: '7°C', range: '0°C ~ 8°C', desc: '多雲', advice: '濕度較高體感寒冷，請穿防滑鞋。', icon: 'cloud' },
            'd4': { loc: '福岡市', date: '1/28 (Day 4)', temp: '9°C', range: '4°C ~ 10°C', desc: '陰天', advice: '市區風大，建議穿著防風外套。', icon: 'cloud' },
            'd5': { loc: '福岡市', date: '1/29 (Day 5)', temp: '10°C', range: '3°C ~ 11°C', desc: '晴朗', advice: '早晚溫差大，洋蔥式穿法最佳。', icon: 'sun' },
            'd6': { loc: '福岡市', date: '1/30 (Day 6)', temp: '9°C', range: '4°C ~ 10°C', desc: '多雲時晴', advice: '室內暖氣強，內搭不宜過厚。', icon: 'cloud-sun' }
        };

        function updateWeatherWidget(dayId) {
            const data = weatherData[dayId];
            if (data) {
                document.getElementById('hw-loc').innerText = data.loc;
                document.getElementById('hw-date').innerText = data.date;
                document.getElementById('hw-temp').innerText = data.temp; 
                document.getElementById('hw-desc').innerText = data.desc;
                document.getElementById('hw-range').innerText = data.range;
                document.getElementById('hw-advice').innerText = data.advice;
                
                // Update Icon
                const iconSvg = weatherIcons[data.icon] || weatherIcons['cloud'];
                // Wrap in svg tag with stroke/fill settings
                const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconSvg.replace('<svg viewBox="0 0 24 24">', '').replace('</svg>', '')}</svg>`;
                document.getElementById('hw-icon').innerHTML = fullSvg;
            }
        }
                
        // --- REAL-TIME WEATHER FUNCTIONS (Using Open-Meteo Free API) ---
        let currentMyTemp = null;

        // 智慧地名翻譯對照表 (保留作為快速快取，節省 AI 資源)
        const cityMapping = {
            '由布院': 'Yufuin',
            '湯布院': 'Yufuin',
            '黑川': 'Minamioguni', 
            '黑川溫泉': 'Minamioguni',
            '熊本': 'Kumamoto',
            '熊本市': 'Kumamoto',
            '阿蘇': 'Aso',
            '別府': 'Beppu',
            '福岡': 'Fukuoka',
            '博多': 'Fukuoka',
            '太宰府': 'Dazaifu',
            '高千穗': 'Takachiho'
        };

        // 新增：獨立的 Gemini 呼叫函數，只回傳文字，不操作 UI
        async function getGeminiResponse(promptText) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: promptText }] }]
                    })
                });

                const data = await response.json();
                if (data.error) throw new Error(data.error.message);
                
                let text = data.candidates[0].content.parts[0].text.trim();
                // 清理可能的回傳格式
                text = text.replace(/```(html|json)?/g, '').replace(/```/g, '').trim();
                return text;
            } catch (error) {
                console.error("AI Fetch Error:", error);
                throw error;
            }
        }

        async function fetchRealtimeWeather() {
            const rawInput = document.getElementById('weather-city-input').value.trim();
            if (!rawInput) {
                alert('請輸入城市名稱');
                return;
            }

            // UI Loading State
            document.getElementById('weather-placeholder').style.display = 'none';
            document.getElementById('weather-result').style.display = 'block';
            document.getElementById('wc-loc').innerText = rawInput; 
            document.getElementById('wc-desc').innerText = '準備中...';
            document.getElementById('wc-temp').innerText = '--°';
            document.getElementById('wc-advice').innerText = '...';

            let searchTerm = rawInput;
            let isTranslated = false;

            try {
                // 步驟 1: 先檢查快速對照表 (最快)
                for (const key in cityMapping) {
                    if (rawInput.includes(key)) {
                        searchTerm = cityMapping[key];
                        isTranslated = true;
                        console.log("使用內建對照表:", searchTerm);
                        break;
                    }
                }

                // 步驟 2: 如果對照表沒有，請求 AI 在背景翻譯 (您的新想法!)
                if (!isTranslated) {
                    document.getElementById('wc-desc').innerText = '🔍 AI 正在翻譯地名...';
                    
                    const translatePrompt = `
                        Task: Translate the place name "${rawInput}" into its official English Romanization name for using in a Weather API.
                        Target: Japan locations.
                        Rule: Output ONLY the English name. No explanations.
                        Example: "黑川溫泉" -> "Minamioguni" (or Kurokawa Onsen), "由布院" -> "Yufuin".
                    `;
                    
                    try {
                        const aiTranslation = await getGeminiResponse(translatePrompt);
                        // 簡單驗證回傳是否為英文
                        if (/^[a-zA-Z\s\-,]+$/.test(aiTranslation)) {
                            searchTerm = aiTranslation;
                            isTranslated = true;
                            console.log("AI 翻譯結果:", searchTerm);
                            document.getElementById('wc-desc').innerText = `搜尋: ${searchTerm}...`;
                        }
                    } catch (e) {
                        console.warn("AI 翻譯失敗，嘗試使用原始中文搜尋");
                    }
                }

                document.getElementById('wc-desc').innerText = '連線氣象衛星...';

                // 步驟 3: Geocoding API 查詢
                // 優先使用翻譯後的英文，若無則用中文
                let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=1&language=en&format=json`;
                let geoRes = await fetch(geoUrl);
                let geoData = await geoRes.json();

                // 英文找不到，最後嘗試中文
                if ((!geoData.results || geoData.results.length === 0) && isTranslated) {
                     geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(rawInput)}&count=1&language=zh&format=json`;
                     geoRes = await fetch(geoUrl);
                     geoData = await geoRes.json();
                }

                if (!geoData.results || geoData.results.length === 0) {
                     throw new Error(`找不到「${rawInput}」<br>AI 翻譯: ${searchTerm}`);
                }

                const { latitude, longitude, name, country } = geoData.results[0];
                
                // 步驟 4: 取得天氣
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
                const weatherRes = await fetch(weatherUrl);
                const weatherData = await weatherRes.json();

                const temp = weatherData.current_weather.temperature;
                const weatherCode = weatherData.current_weather.weathercode;

                // Update UI
                document.getElementById('wc-temp').innerText = `${temp}°C`;
                // 修正 3: 改用 innerHTML 以支援 SVG 圖示
                document.getElementById('wc-desc').innerHTML = getWeatherDesc(weatherCode);

                // 步驟 5: 溫差對比
                updateComparison(temp);

                // 步驟 6: AI 穿衣建議
                document.getElementById('wc-advice').innerText = 'AI 正在分析當地氣候...';
                askAiWeatherAdvice(rawInput, temp, getWeatherDesc(weatherCode));

            } catch (error) {
                console.error(error);
                document.getElementById('wc-desc').innerText = '查詢失敗';
                
                let errorMsg = error.message;
                if (errorMsg.includes('Failed to fetch')) {
                    errorMsg = '網路連線被阻擋。<br>請檢查網路設定。';
                }
                
                document.getElementById('wc-advice').innerHTML = `<span style="color:var(--danger); font-weight:bold;">${errorMsg}</span>`;
            }
        }

        // 修正 2: 定義簡約天氣 SVG 圖示 (白色線條)
        const simpleIcons = {
            sun: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
            cloud: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
            rain: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 13v8"></path><path d="M8 13v8"></path><path d="M12 15v8"></path><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>',
            snow: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10H4a7 7 0 1 1 7-7v.5"></path><path d="M10 14a6 6 0 0 0-6-6"></path><line x1="12" y1="16" x2="12" y2="22"></line><line x1="12" y1="22" x2="9" y2="19"></line><line x1="12" y1="22" x2="15" y2="19"></line><line x1="18.5" y1="12" x2="22" y2="12"></line><line x1="22" y1="12" x2="19.5" y2="9.5"></line><line x1="22" y1="12" x2="19.5" y2="14.5"></line><line x1="5" y1="18.5" x2="2" y2="18.5"></line><line x1="2" y1="18.5" x2="4.5" y2="21"></line><line x1="2" y1="18.5" x2="4.5" y2="16"></line><line x1="17.5" y1="18.5" x2="20.5" y2="21"></line><line x1="17.5" y1="18.5" x2="20.5" y2="16"></line></svg>',
            fog: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6h14M4 10h16M6 14h12M4 18h16"></path></svg>',
            lightning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>'
        };

        function getWeatherDesc(code) {
            // Updated to return HTML with Simple SVG
            if (code === 0) return `晴朗 ${simpleIcons.sun}`;
            if (code >= 1 && code <= 3) return `多雲 ${simpleIcons.cloud}`;
            if (code >= 45 && code <= 48) return `有霧 ${simpleIcons.fog}`;
            if (code >= 51 && code <= 67) return `有雨 ${simpleIcons.rain}`;
            if (code >= 71 && code <= 77) return `有雪 ${simpleIcons.snow}`;
            if (code >= 80 && code <= 82) return `陣雨 ${simpleIcons.rain}`;
            if (code >= 95) return `雷雨 ${simpleIcons.lightning}`;
            return `多雲 ${simpleIcons.cloud}`;
        }

        function getLocalWeather() {
            const tempEl = document.getElementById('wc-my-temp');
            
            // 狀態 1: 檢查瀏覽器支援
            if (!navigator.geolocation) {
                openModal('瀏覽器不支援定位，請手動輸入城市：');
                return;
            }
            
            // 視覺回饋
            tempEl.innerText = '定位中..';
            tempEl.style.fontSize = '1.2rem';
            tempEl.style.color = '#2563EB'; 

            const options = {
                enableHighAccuracy: false, 
                timeout: 5000, 
                maximumAge: 0
            };

            navigator.geolocation.getCurrentPosition(async (position) => {
                // --- 成功取得定位 ---
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                try {
                    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
                    const res = await fetch(url);
                    const data = await res.json();
                    
                    currentMyTemp = data.current_weather.temperature;
                    
                    // 恢復顯示
                    tempEl.innerText = `${currentMyTemp}°C`;
                    tempEl.style.fontSize = '1.5rem';
                    tempEl.style.color = '#1F2937'; 
                    
                    // Update comparison
                    const targetTempStr = document.getElementById('wc-temp').innerText;
                    if (targetTempStr !== '--°') {
                        updateComparison(parseFloat(targetTempStr));
                    }
                } catch (e) {
                    console.error(e);
                    tempEl.innerText = 'Err';
                    openModal('讀取氣象數據失敗，請手動輸入城市：');
                }
            }, (err) => {
                // --- 定位失敗 ---
                console.warn('Geolocation Error:', err);
                
                let shortMsg = '定位失敗';
                // 區分錯誤原因顯示在小框框中
                if (err.code === 1) shortMsg = '無權限'; // 使用者或瀏覽器拒絕
                if (err.code === 2) shortMsg = '訊號不良'; 
                if (err.code === 3) shortMsg = '逾時'; 
                
                tempEl.innerText = shortMsg;
                tempEl.style.fontSize = '1rem'; 
                tempEl.style.color = '#EF4444'; 
                
                // 使用自定義 Modal 詢問，避免原生 prompt 被擋
                setTimeout(() => {
                     openModal(`定位受限 (${shortMsg})，改為手動輸入？`);
                }, 300);
            }, options);
        }

        // --- Modal Functions (取代原生 alert/prompt) ---
        function openModal(msg) {
            document.getElementById('modal-msg').innerText = msg;
            document.getElementById('location-modal').style.display = 'flex';
            document.getElementById('modal-city-input').focus();
        }

        function closeModal() {
            document.getElementById('location-modal').style.display = 'none';
        }

        async function submitManualLocation() {
            const manualCity = document.getElementById('modal-city-input').value.trim();
            if (!manualCity) return;
            
            closeModal();
            
            const tempEl = document.getElementById('wc-my-temp');
            tempEl.innerText = '查詢中..';
            tempEl.style.color = '#2563EB';
            tempEl.style.fontSize = '1.2rem';
            
            // --- 新增：智慧翻譯邏輯 (與天氣查詢同步) ---
            let searchTerm = manualCity;
            let isTranslated = false;

            // 1. 檢查內建對照表
            for (const key in cityMapping) {
                if (manualCity.includes(key)) {
                    searchTerm = cityMapping[key];
                    isTranslated = true;
                    break;
                }
            }

            // 2. AI 背景翻譯 (若對照表沒有)
            if (!isTranslated) {
                // 提示使用者正在翻譯
                tempEl.innerText = '翻譯中..';
                
                const translatePrompt = `
                    Task: Translate the place name "${manualCity}" into its official English Romanization name for using in a Weather API.
                    Target: Global locations (Focus on Taiwan/Japan).
                    Rule: Output ONLY the English name. No explanations.
                    Example: "台北" -> "Taipei", "由布院" -> "Yufuin", "新竹" -> "Hsinchu".
                `;
                
                try {
                    const aiTranslation = await getGeminiResponse(translatePrompt);
                    if (/^[a-zA-Z\s\-,]+$/.test(aiTranslation)) {
                        searchTerm = aiTranslation;
                        isTranslated = true;
                        console.log("手動位置 AI 翻譯結果:", searchTerm);
                    }
                } catch (e) {
                    console.warn("AI 翻譯失敗，將使用原始中文搜尋");
                }
            }
            
            tempEl.innerText = '連線中..';
            // --- 邏輯結束 ---

            try {
                // 使用 Geocoding API 查詢
                // 優先使用翻譯後的英文搜尋 (精準度較高)
                let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=1&language=en&format=json`;
                let geoRes = await fetch(geoUrl);
                let geoData = await geoRes.json();

                // 如果英文找不到，嘗試用原始中文搜尋 (Fallback)
                if ((!geoData.results || geoData.results.length === 0) && isTranslated) {
                    geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(manualCity)}&count=1&language=zh&format=json`;
                    geoRes = await fetch(geoUrl);
                    geoData = await geoRes.json();
                }

                if (!geoData.results || geoData.results.length === 0) {
                    tempEl.innerText = '查無此地';
                    // 恢復按鈕狀態並顯示錯誤
                    setTimeout(() => openModal(`找不到「${manualCity}」(翻譯: ${searchTerm})，請嘗試輸入其他名稱：`), 1000);
                    return;
                }

                const { latitude, longitude } = geoData.results[0];
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
                const weatherRes = await fetch(weatherUrl);
                const weatherData = await weatherRes.json();

                currentMyTemp = weatherData.current_weather.temperature;
                
                // 更新 UI
                tempEl.innerText = `${currentMyTemp}°C`;
                tempEl.style.fontSize = '1.5rem';
                tempEl.style.color = '#1F2937';
                
                // 更改標題讓人知道是手動的
                const titleEl = document.querySelector('.wc-mini-card .wc-mini-title');
                // 保留 icon，顯示使用者輸入的中文地名
                titleEl.innerHTML = `<svg class="icon-mini" style="color: #EF4444;" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${manualCity}`;

                const targetTempStr = document.getElementById('wc-temp').innerText;
                if (targetTempStr !== '--°') {
                    updateComparison(parseFloat(targetTempStr));
                }

            } catch (e) {
                console.error(e);
                tempEl.innerText = '失敗';
                tempEl.style.color = '#EF4444';
            }
        }

        function updateComparison(targetTemp) {
            if (currentMyTemp === null) {
                // Try to fetch local if not yet fetched
                getLocalWeather();
                return;
            }
            
            const diff = targetTemp - currentMyTemp;
            const diffTag = document.getElementById('wc-diff-tag');
            const diffText = document.getElementById('wc-diff-text');
            
            diffTag.style.display = 'inline-block';
            
            if (diff > 0) {
                diffTag.className = 'wc-diff-tag wc-diff-hot';
                diffTag.innerText = `熱 ${diff.toFixed(1)}°C`;
                diffText.innerText = '比這裡溫暖';
            } else {
                diffTag.className = 'wc-diff-tag wc-diff-cold';
                diffTag.innerText = `冷 ${Math.abs(diff).toFixed(1)}°C`;
                diffText.innerText = '比這裡冷';
            }
        }

        async function askAiWeatherAdvice(city, temp, condition) {
            const prompt = `
                現在${city}的即時氣溫是 ${temp}度，天氣狀況為${condition}。
                請以「旅遊小秘書」的口吻，給予台灣旅客簡短的穿衣建議（約50字）。
                請包含體感描述（例如：是否需要發熱衣、圍巾等）。
            `;
            
            try {
                // 改用新的共用函數
                const text = await getGeminiResponse(prompt);
                document.getElementById('wc-advice').innerText = text;
            } catch (e) {
                document.getElementById('wc-advice').innerText = 'AI 連線逾時，建議洋蔥式穿搭。';
            }
        }
        
        // --- END REAL-TIME WEATHER ---

        function switchTab(element) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.container').forEach(container => container.classList.remove('active'));
            element.classList.add('active');
            const targetId = element.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            window.scrollTo(0, 0);
        }

        function toggleTimeline(id, toggleElement) {
            const timeline = document.getElementById(id);
            // If opening a new day
            if (!timeline.classList.contains('show')) {
                // Collapse others
                document.querySelectorAll('.timeline.show').forEach(t => t.classList.remove('show'));
                document.querySelectorAll('.day-toggle.open').forEach(t => t.classList.remove('open'));
                
                // Show target
                timeline.classList.add('show');
                toggleElement.classList.add('open');
                
                // Update Weather!
                updateWeatherWidget(id);
            } else {
                // Closing the current day
                timeline.classList.remove('show');
                toggleElement.classList.remove('open');
            }
        }

        // AI Functions - UI Interaction Part
        const chatHistory = document.getElementById('chat-history');
        const aiInput = document.getElementById('ai-user-input');
        const aiTitle = document.getElementById('ai-modal-title');
        const aiInputArea = document.getElementById('ai-input-area');
        const btnBackTrans = document.getElementById('btn-back-trans');

        // Initial Greeting
        function initAiChat() {
            if (chatHistory.children.length === 0) {
                const welcomeHtml = `
                    你好！我是你的九州旅遊 AI 助手。
                    <br><br>
                    你可以點選下方的 <b>「行程諮詢」</b> 詢問路線，或使用 <b>「中/日翻譯」</b> 與當地人溝通。
                `;
                appendMessage('ai', welcomeHtml);
            }
        }

        // Function to switch to AI tab programmatically
        function goToAiTab() {
            const aiTabBtn = document.querySelector('[data-target="view-ai"]');
            switchTab(aiTabBtn);
        }

        function showAiTranslatorMode() {
            // 修正 3: JS 動態切換標題時也要用 SVG
            const iconSvg = '<svg class="icon-mini" style="width: 24px; height: 24px; color: #F59E0B; margin-right: 8px;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>';
            aiTitle.innerHTML = iconSvg + '<span>隨身 AI 翻譯與助手</span>';
            aiInputArea.style.display = 'block'; 
            btnBackTrans.style.display = 'none';
            // Scroll to bottom
            chatHistory.scrollTop = chatHistory.scrollHeight;
            setupVoiceButton();
        }
        
        // Append Message Bubble
        function appendMessage(sender, htmlContent, isAudio = false) {
            const row = document.createElement('div');
            row.className = `chat-row ${sender}`;
            
            const bubble = document.createElement('div');
            bubble.className = `chat-bubble ${sender}`;
            bubble.innerHTML = htmlContent;
            
            // If it's an AI message with Japanese, add inline audio button
            if (sender === 'ai' && isAudio) {
                const btn = document.createElement('button');
                btn.className = 'btn-audio-inline';
                btn.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
                // Extract plain text for speaking (remove HTML tags)
                const textToSpeak = bubble.innerText.replace('🔊', '').trim();
                
                btn.onclick = () => speakText(textToSpeak);
                bubble.appendChild(btn);
                
                // Also auto-play once
                setTimeout(() => speakText(textToSpeak), 200);
            }

            row.appendChild(bubble);
            chatHistory.appendChild(row);
            
            // Scroll to bottom
            chatHistory.scrollTop = chatHistory.scrollHeight;
            
            return bubble; // Return in case we need to update it (loading state)
        }
        
        function showLoading() {
            const row = document.createElement('div');
            row.className = 'chat-row ai loading-row';
            row.id = 'loading-indicator';
            
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble ai loading-bubble';
            bubble.innerHTML = 'AI 正在思考中<span class="loading-dots"></span>';
            
            row.appendChild(bubble);
            chatHistory.appendChild(row);
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }

        function removeLoading() {
            const loading = document.getElementById('loading-indicator');
            if (loading) loading.remove();
        }
        
        // Helper to update placeholder based on selection
        function updatePlaceholder() {
            const lang = document.querySelector('input[name="voice_lang"]:checked').value;
            const input = document.getElementById('ai-user-input');
            if (lang === 'zh-TW') {
                input.placeholder = '請輸入中文 (或使用語音)...';
            } else {
                input.placeholder = '請輸入日文 (或切換語音)...';
            }
        }

        function speakText(text) {
             speechSynthesis.cancel();
             const utterance = new SpeechSynthesisUtterance(text);
             utterance.lang = 'ja-JP'; 
             utterance.rate = 0.9;
             const voices = speechSynthesis.getVoices();
             const jaVoice = voices.find(v => v.lang.includes('ja'));
             if (jaVoice) utterance.voice = jaVoice;
             speechSynthesis.speak(utterance);
        }

        // Voice Recognition Logic
        function setupVoiceButton() {
            const voiceBtn = document.getElementById('btn-voice-ja');
            if (!voiceBtn) return;
            
            voiceBtn.oncontextmenu = function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            };

            let recognition;
            
            if ('webkitSpeechRecognition' in window) {
                recognition = new webkitSpeechRecognition();
                // 關鍵修正：不再自動偵測，而是讀取使用者的選擇
                recognition.continuous = false;
                recognition.interimResults = false;

                recognition.onstart = function() {
                    // 在開始時動態設定語言
                    const selectedLang = document.querySelector('input[name="voice_lang"]:checked').value;
                    recognition.lang = selectedLang;
                    
                    voiceBtn.classList.add('recording');
                    const langText = selectedLang === 'zh-TW' ? '中文' : '日文';
                    voiceBtn.innerHTML = `🔴 聽${langText}中...`;
                    document.getElementById('ai-user-input').placeholder = `正在聆聽${langText}...`;
                };

                recognition.onend = function() {
                    voiceBtn.classList.remove('recording');
                    voiceBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;margin-bottom:2px;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                        語音輸入
                    `;
                    updatePlaceholder();
                };

                recognition.onresult = function(event) {
                    const transcript = event.results[0][0].transcript;
                    document.getElementById('ai-user-input').value = transcript;
                    sendToGemini('voice_auto');
                };
                
                // Error handling for "no-speech" or "language mismatch"
                recognition.onerror = function(event) {
                    console.log('Voice Error:', event.error);
                    voiceBtn.classList.remove('recording');
                    voiceBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;margin-bottom:2px;"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                        重試
                    `;
                };

                const startRec = (e) => {
                    if (e.cancelable) e.preventDefault();
                    // 每次點擊前先停止舊的 (避免重複開啟)
                    try { recognition.stop(); } catch(err) {}
                    try { recognition.start(); } catch(err) { console.log(err); }
                };
                
                // 改為 Click 觸發即可，不用長按，因為現在有語言開關了
                // 為了手機體驗，還是保留 touchstart
                voiceBtn.onclick = startRec;
                
            } else {
                voiceBtn.style.display = 'none'; 
                console.log('Web Speech API not supported');
            }
        }

        function askGeminiGuide(spotName, customPrompt) {
            goToAiTab();
            // 修正 4: 導覽模式標題圖示也統一
            const iconSvg = '<svg class="icon-mini" style="width: 24px; height: 24px; color: #F59E0B; margin-right: 8px;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>';
            aiTitle.innerHTML = iconSvg + `<span>${spotName} 小故事</span>`;
            aiInputArea.style.display = 'none'; 
            btnBackTrans.style.display = 'block'; 
            
            // Add system message to chat indicating start
            appendMessage('ai', `正在為您生成關於「${spotName}」的故事...`);

            const prompt = `
                你是一位帶領親子旅遊的九州導遊。
                請針對景點「${spotName}」生成一段給 5-8 歲小孩聽的導覽詞。
                要求：
                1. 語氣生動活潑，使用台灣繁體中文。
                2. 內容包含一個關於該景點的有趣冷知識。
                3. 給孩子一個「小小觀察任務」（例如：找找看某個顏色的東西）。
                4. 整體長度控制在 150 字以內。
                5. ${customPrompt}
            `;
            
            callGemini(prompt);
        }

        function handleEnter(e) {
            if (e.key === 'Enter') sendToGemini('auto');
        }

        function sendToGemini(mode) {
            const text = aiInput.value.trim();
            if (!text) return;

            // Display User Message
            appendMessage('user', text);
            aiInput.value = ''; // Clear input

            // 1. Grab Schedule Context
            const scheduleContext = document.getElementById('view-schedule').innerText;
            
            let prompt = "";

            if (mode === 'consult') {
                prompt = `
                    你是一位專業的九州親子旅遊顧問。
                    【行程表資訊】：${scheduleContext.substring(0, 8000)}
                    【使用者問題】： "${text}"
                    任務：請根據行程表，針對使用者的問題提供具體、實用的建議。
                    注意：考慮到是親子旅遊，請注意體力分配與兒童需求。
                    請用台灣繁體中文回答。
                `;
            } else if (mode === 'translate') {
                prompt = `
                    你是一個專業的中日翻譯機。
                    【使用者輸入】： "${text}"
                    任務：
                    1. 若輸入中文：請翻譯成自然的日文 (禮貌形)。只輸出翻譯後的日文。
                    2. 若輸入日文：請翻譯成繁體中文。
                    注意：不要任何解釋，只給我翻譯結果。不要羅馬拼音。
                `;
            } else if (mode === 'voice_auto') {
                // 根據使用者選擇的語言，給 AI 更精準的指令
                const selectedLang = document.querySelector('input[name="voice_lang"]:checked').value;
                const isInputZh = selectedLang === 'zh-TW';
                
                prompt = `
                    你是一個中日雙向口譯員。
                    【輸入語言】：${isInputZh ? '中文 (台灣)' : '日文'}
                    【輸入內容】： "${text}"
                    
                    任務：
                    ${isInputZh ? '1. 使用者說中文，請翻譯成日文 (禮貌形)。' : '1. 使用者說日文，請翻譯成台灣繁體中文。'}
                    
                    注意：
                    - 只輸出翻譯結果，不要解釋。
                    - 若語意不清，請根據旅遊情境推測最可能的句子。
                `;
            } else {
                prompt = `
                    你是一位專業的九州親子旅遊顧問與隨身翻譯。
                    【行程表資訊】：${scheduleContext.substring(0, 5000)}
                    【使用者輸入】： "${text}"
                    請自動判斷：
                    1. 若是問問題/尋求建議 -> 執行行程諮詢模式。
                    2. 若是短句/單詞 -> 執行翻譯模式 (中翻日或日翻中)。
                    請直接給出結果，不要解釋你的判斷邏輯。
                `;
            }

            callGemini(prompt);
        }

        async function callGemini(promptText) {
            showLoading();
            
            try {
                // 改用新的共用函數 getGeminiResponse
                let rawText = await getGeminiResponse(promptText);
                removeLoading();

                // Check for Japanese chars to decide if we show audio button
                const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(rawText);
                const isTranslation = hasJapanese && rawText.length < 500;

                // Format text (convert newlines to <br>)
                const formattedText = rawText.replace(/\n/g, '<br>');
                
                appendMessage('ai', formattedText, isTranslation);

            } catch (error) {
                removeLoading();
                console.error('Gemini API Error:', error);
                appendMessage('ai', `<span style="color:red">發生錯誤，請稍後再試。<br>Error: ${error.message}</span>`);
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            // Default: Open Day 1
            const d1Toggle = document.getElementById('toggle-d1');
            const d1Timeline = document.getElementById('d1');
            if (d1Timeline) { 
                d1Timeline.classList.add('show');
                d1Toggle.classList.add('open');
                updateWeatherWidget('d1'); 
            }
            initAiChat();
            setupVoiceButton(); // Init voice listener
        });
    </script>
</body>
</html>