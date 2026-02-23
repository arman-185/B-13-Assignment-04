
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')
const jobCount = document.getElementById('jobCount');

const allCardSections = document.getElementById('all-cards')
const mainContainer = document.querySelector('main');
const filterSection = document.querySelector('#filtered-section');



function calculateCount() {
    jobCount.innerText = allCardSections.children.length + ' Jobs';
    total.innerText = allCardSections.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount()


function switchTab(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')


    allFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    rejectedFilterBtn.classList.add('bg-white', 'text-black')

    const seclected = document.getElementById(id)
    currentStatus = id
    console.log(currentStatus);
    // console.log(seclected);

    seclected.classList.remove('bg-white', 'text-black')
    seclected.classList.add('bg-blue-500', 'text-white')

    if (id == 'interview-filter-btn') {
        allCardSections.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview();
    }
    else if (id == 'all-filter-btn') {
        allCardSections.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSections.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected();
    }
}



mainContainer.addEventListener('click', function (event) {
    // trashbin
    if (event.target.closest('.trash-btn')) {
        const parentNode = event.target.closest('.bg-white');
        const jabName = parentNode.querySelector('.jobName').innerText;


        interviewList = interviewList.filter(item => item.jabName != jabName);
        rejectedList = rejectedList.filter(item => item.jabName != jabName);

        parentNode.remove();

        calculateCount();
    }

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const jabName = parentNode.querySelector('.jobName').innerText;
        const postName = parentNode.querySelector('.postName').innerText;
        const salaryRange = parentNode.querySelector('.salaryRange').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const workField = parentNode.querySelector('.workField').innerText;
        parentNode.querySelector('.status').innerText = 'INTERVIEW';

        const cardInfo = {
            jabName,
            postName,
            salaryRange,
            status: 'INTERVIEW',
            workField
        }

        const jobExist = interviewList.find(item => item.jabName == cardInfo.jabName)



        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.jabName != cardInfo.jabName)

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount()
    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const jabName = parentNode.querySelector('.jobName').innerText;
        const postName = parentNode.querySelector('.postName').innerText;
        const salaryRange = parentNode.querySelector('.salaryRange').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const workField = parentNode.querySelector('.workField').innerText;

        parentNode.querySelector('.status').innerText = 'REJECTED';

        const cardInfo = {
            jabName,
            postName,
            salaryRange,
            status: 'REJECTED',
            workField
        }

        const jobExist = rejectedList.find(item => item.jabName == cardInfo.jabName);

        if (!jobExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.jabName != cardInfo.jabName);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }
        calculateCount()
    }
})


function renderInterview() {
    filterSection.innerHTML = '';

    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm border flex flex-col items-center justify-center py-20 text-center">
                <img src="./jobs.png" alt="no jobs" class="mb-4"/>
                <h3 class="text-xl font-semibold text-gray-700">No jobs available</h3>
                <p class="text-gray-400 text-sm">Check back soon for new job opportunities</p>
            </div>
        `
        return;
    }

    for (let interview of interviewList) {

        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl shadow-sm border p-6 flex justify-between items-start mb-6'
        div.innerHTML = `
                        <div class="space-y-5">
                    <div>
                        <h2 class="jobName text-lg font-semibold text-gray-800">${interview.jabName}</h2>
                        <p class="postName text-gray-500 ">${interview.postName}</p>
                    </div>

                    <div class="salaryRange text-sm text-gray-500">
                        ${interview.salaryRange}
                    </div>

                    <span class="status inline-block text-xs font-medium px-3 py-1 rounded-md bg-blue-100">
                        ${interview.status}
                    </span>

                    <p class="workField text-gray-600 text-sm">
                        ${interview.workField}
                    </p>

                    <div class="flex gap-3 pt-2">
                        <button
                            class="interview-btn px-4 py-1.5 text-sm rounded-md border border-green-500 text-green-600 hover:bg-green-100 cursor-pointer">INTERVIEW</button>
                        <button
                            class="rejected-btn px-4 py-1.5 text-sm rounded-md border border-red-500 text-red-600 hover:bg-red-100 cursor-pointer">REJECTED</button>
                    </div>
                </div>

                <button class="trash-btn text-gray-400 hover:text-gray-600 text-xl cursor-pointer">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
        `
        filterSection.appendChild(div)
    }
}


function renderRejected() {
    filterSection.innerHTML = ''

    if (rejectedList.length === 0) {
        filterSection.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm border flex flex-col items-center justify-center py-20 text-center">
                <img src="./jobs.png" alt="no jobs" class="mb-4"/>
                <h3 class="text-xl font-semibold text-gray-700">No jobs available</h3>
                <p class="text-gray-400 text-sm">Check back soon for new job opportunities</p>
            </div>
        `
        return;
    }

    for (let reject of rejectedList) {

        let div = document.createElement('div');
        div.className = 'bg-white rounded-xl shadow-sm border p-6 flex justify-between items-start mb-6'
        div.innerHTML = `
                        <div class="space-y-5">
                    <div>
                        <h2 class="jobName text-lg font-semibold text-gray-800">${reject.jabName}</h2>
                        <p class="postName text-gray-500 ">${reject.postName}</p>
                    </div>

                    <div class="salaryRange text-sm text-gray-500">
                        ${reject.salaryRange}
                    </div>

                    <span class="status inline-block text-xs font-medium px-3 py-1 rounded-md bg-blue-100">
                        ${reject.status}
                    </span>

                    <p class="workField text-gray-600 text-sm">
                        ${reject.workField}
                    </p>

                    <div class="flex gap-3 pt-2">
                        <button
                            class="interview-btn px-4 py-1.5 text-sm rounded-md border border-green-500 text-green-600 hover:bg-green-100 cursor-pointer">INTERVIEW</button>
                        <button
                            class="rejected-btn px-4 py-1.5 text-sm rounded-md border border-red-500 text-red-600 hover:bg-red-100 cursor-pointer">REJECTED</button>
                    </div>
                </div>

                <button class="trash-btn text-gray-400 hover:text-gray-600 text-xl cursor-pointer">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
        `
        filterSection.appendChild(div)
    }
}