// Get search query from URL
const params = new URLSearchParams(window.location.search);
const query = params.get("query");

// Display the search query
document.getElementById("search-query").textContent = `You searched for: "${query}"`;

// Mock data for search results
const mockResults = [
    { 
        title: "Chiếu Cẩm Nê", 
        link: "chieucamne.html", 
        snippet: "Tìm hiểu về nghề dệt chiếu truyền thống của Chiếu Cẩm Nê.", 
        image: "chieucamne.jfif" 
    },
    { 
        title: "Đá Mỹ Nghệ Non Nước", 
        link: "damynghenonnuoc.html", 
        snippet: "Khám phá kỹ thuật chạm khắc đá ở Non Nước.", 
        image: "damynghe.jpg" 
    },
    { 
        title: "Nước Mắm Nam Ô", 
        link: "nuocmamnamo.html", 
        snippet: "Khám phá nghề làm nước mắm truyền thống ở Nam Ô.", 
        image: "nuocmamnamo.png" 
    },
    { 
        title: "Bánh Tráng Túy Loan", 
        link: "banhtrangtuyloan.html", 
        snippet: "Thưởng thức món bánh tráng trứ danh của Túy Loan.", 
        image: "banhtrangtuyloan.jpg" 
    },
    { 
        title: "Bánh Khô Mè", 
        link: "banhkhome.html", 
        snippet: "Thưởng thức bánh mè khô Đà Nẵng thơm ngon.", 
        image: "banhkhome.jpeg" 
    },
    { 
        title: "Phan Châu Trinh", 
        link: "pct.html", 
        snippet: "", 
        image: "pct.jpg" 
    },
    { 
        title: "Huỳnh Thúc Kháng", 
        link: "htk.html", 
        snippet: "", 
        image: "htk.png" 
    },
    { 
        title: "Trần Quý Cáp", 
        link: "tqc.html", 
        snippet: "", 
        image: "tqc.jpg" 
    },
    { 
        title: "Trần Cao Vân", 
        link: "tcv.html", 
        snippet: "", 
        image: "tcv.jpg" 
    },
    { 
        title: "Thái Phiên", 
        link: "tp.html", 
        snippet: "", 
        image: "tp.jpg" 
    },
    { 
        title: "Nguyễn Duy Hiệu", 
        link: "ndh.html", 
        snippet: "", 
        image: "ndh.jpg" 
    },
    { 
        title: "Nguyễn Tri Phương", 
        link: "ntp.html", 
        snippet: "", 
        image: "ntp.jpg" 
    },
    { 
        title: "Nguyễn Bá Thanh", 
        link: "nbt.html", 
        snippet: "", 
        image: "nbt.jpg" 
    },
    { 
        title: "Bảo tàng Đồng Đình", 
        link: "dongdinh.html", 
        snippet: "", 
        image: "dongdinh.jpg" 
    },
    { 
        title: "Bảo tàng Hồ Chí Minh-chi nhánh Quân khu 5.", 
        link: "hcmqk5.html", 
        snippet: "", 
        image: "hcmqk5.jfif" 
    },
    { 
        title: "Nhà Trưng bày Hoàng Sa", 
        link: "ntbhs.html", 
        snippet: "", 
        image: "nhatrungbayHS1.jpg" 
    },
    { 
        title: "Bảo tàng Đà Nẵng", 
        link: "btdn.html", 
        snippet: "", 
        image: "btdn.jpg" 
    },
    { 
        title: "Bảo tàng Điêu khắc Chăm Đà Nẵng", 
        link: "btdkcdn.html", 
        snippet: "", 
        image: "btdkcdn.jpg" 
    },
    { 
        title: "Lễ hội Cầu ngư", 
        link: "caungu.html", 
        snippet: "", 
        image: "caungu.jpg" 
    },
    { 
        title: "Lễ ăn thề kết nghĩa (người c'tu)", 
        link: "atkn.html", 
        snippet: "", 
        image: "atkn.jpg" 
    },
    { 
        title: "Lễ hội Đình làng Thạc Gián", 
        link: "dltg.html", 
        snippet: "", 
        image: "dltg.jpg" 
    },
    { 
        title: "Lễ hội Đình làng Túy Loan", 
        link: "dltl.html", 
        snippet: "", 
        image: "dltl.jpg" 
    },
    { 
        title: "Lễ hội Quán Thế Âm", 
        link: "qta.html", 
        snippet: "", 
        image: "qta.jpg" 
    },
    { 
        title: "Lễ hội rước mục đồng", 
        link: "rmd.html", 
        snippet: "", 
        image: "rmd.jpg" 
    },
    { 
        title: "Lễ hội đua thuyền", 
        link: "duathuyen.html", 
        snippet: "", 
        image: "duathuyen.jpg" 
    },
    { 
        title: "Lễ hội làng An Hải", 
        link: "langanhai.html", 
        snippet: "", 
        image: "langanhai.jpg" 
    },
    { 
        title: "Lễ hội làng Hòa Mỹ", 
        link: "langhoamy.html", 
        snippet: "", 
        image: "langhoamy.jpg" 
    }
];

// Function to filter mock results based on the query
function performSearch(query) {
    return mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase())
    );
}

// Render search results
const resultsContainer = document.getElementById("search-results");
const results = performSearch(query);

if (results.length > 0) {
    results.forEach(result => {
        const item = document.createElement("div");
        item.classList.add("result-item");

        const image = document.createElement("img");
        image.src = result.image;
        image.classList.add("result-image");

        const content = document.createElement("div");
        content.classList.add("result-content");

        const title = document.createElement("a");
        title.href = result.link;
        title.classList.add("result-title");
        title.textContent = result.title;

        const snippet = document.createElement("p");
        snippet.classList.add("result-snippet");
        snippet.textContent = result.snippet;

        content.appendChild(title);
        content.appendChild(snippet);
        item.appendChild(image);
        item.appendChild(content);
        resultsContainer.appendChild(item);
    });
} else {
    resultsContainer.textContent = "No results found.";
}
