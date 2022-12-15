chrome.contextMenus.create({
    id: "Single Microservice",
    title: "Single Microservice",
    contexts: ["selection"],
})

chrome.contextMenus.create({
    id: "APM",
    title: "APM",
    contexts: ["selection"],
})

chrome.contextMenus.create({
    id: "DevEx",
    title: "DevEx",
    contexts: ["selection"],
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "Single Microservice") {
        urlSignal =  `https://app.signalfx.com/#/dashboard/EXMt1xaAgAA?groupId=DjbvPv1AgC0&configId=EXMt1_6AYAA&startTime=-15m&endTime=Now&variables%5B%5D=Service%3Dsf_service:%5B%22${info.selectionText}%22%5D&variables%5B%5D=Host%20Service%3Dservice:%5B%22${info.selectionText}%22%5D&variables%5B%5D=Traefik%20MS%3Dbackend:%5B%22${info.selectionText}-backend%22%5D&variables%5B%5D=ECS%20Service%3DServiceName:%5B%22${info.selectionText}%22%5D&variables%5B%5D=Rappi%20MS%20name%3Dproject:%5B%22${info.selectionText}%22%5D&density=4`;
        chrome.tabs.create({url:urlSignal});
    } else if (info.menuItemId === "APM") {
        urlSignal =  `https://app.signalfx.com/#/apm/troubleshooting?filters=%7B%22traceFilter%22:%7B%22tags%22:%5B%5D%7D,%22spanFilters%22:%5B%7B%22tags%22:%5B%7B%22tag%22:%22sf_service%22,%22operation%22:%22IN%22,%22values%22:%5B%22${info.selectionText}%22%5D%7D%5D%7D%5D%7D&selected=%5B%7B%22nodeID%22:%22sk5bwa%22,%22nodeTags%22:%5B%7B%22tagName%22:%22sf_service%22,%22value%22:%22${info.selectionText}%22%7D%5D%7D%5D`;
        chrome.tabs.create({url:urlSignal});
    } else if (info.menuItemId === "DevEx") {
        urlSignal =  `https://portal.platform.rappi.com/microservices/${info.selectionText}`;
        chrome.tabs.create({url:urlSignal});
    }
    
})
