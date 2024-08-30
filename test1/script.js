function showInfo(memberId) {
   
    var members = document.getElementsByClassName('member-info');
    for (var i = 0; i < members.length; i++) {
        members[i].classList.remove('show');
    }
    
    
    var memberInfo = document.getElementById(memberId);
    memberInfo.classList.add('show');
}


const data = {
    rafael: {
        labels: ['HTML', 'CSS', 'JAVA', 'PHP', 'C#', 'C++'],
        datasets: [{
            label: 'Knowledge (%)',
            data: [25, 15, 15, 0, 0, 20],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    eric: {
        labels: ['HTML', 'CSS', 'JAVA', 'PHP', 'C#', 'C++'],
        datasets: [{
            label: 'Knowledge (%)',
            data: [10, 5, 10, 0, 0, 30],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    jason: {
        labels: ['HTML', 'CSS', 'JAVA', 'PHP', 'C#', 'C++'],
        datasets: [{
            label: 'Knowledge (%)',
            data: [10, 0, 0, 0, 0, 20],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    roanne: {
        labels: ['HTML', 'CSS', 'JAVA', 'PHP', 'C#', 'C++'],
        datasets: [{
            label: 'Knowledge (%)',
            data: [20, 20, 50, 0, 0, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    zachary: {
        labels: ['HTML', 'CSS', 'JAVA', 'PHP', 'C#', 'C++'],
        datasets: [{
            label: 'Knowledge (%)',
            data: [40, 40, 10, 0, 30, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }
};


function initializeCharts() {
    Object.keys(data).forEach(memberId => {
        new Chart(document.getElementById(`${memberId}Chart`), {
            type: 'bar',
            data: data[memberId],
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeCharts);

document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    if (username.length < 3 || username.length > 50) {
        alert('Username must be between 3 and 50 characters.');
        event.preventDefault(); 
    }

    if (password.length < 3) {
        alert('Password must be at least 3 characters.');
        event.preventDefault();
    }
});