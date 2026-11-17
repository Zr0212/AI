// Lối mở cũ chuyển về bài học hiện hành; bấm Chiếu để dùng hai cửa sổ.
(()=>{const n=Number(new URLSearchParams(location.search).get('lesson'));location.replace(Number.isInteger(n)&&n>=1&&n<=12?'lessons/tiet-'+String(n).padStart(2,'0')+'.html':'index.html')})();
