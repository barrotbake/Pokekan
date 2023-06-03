<div class="profile-box">
	<img class="profile-pic" src="../mudkip.png" alt="mudkip" />
	<h1>Mudkip</h1>
	<div class="exp-container">
		<h2>EXP</h2>
		<div class="progress-bar">
			<div class="progress-bar-inner" />
		</div>
	</div>
</div>

<style lang="scss">
    .profile-box {
        border-right: 5px solid #D5A786;
        border-bottom: 2.5px solid #D5A786;
        display: flex;
        flex-direction: column;
        align-items: center;
        .exp-container, .profile-pic, h1, h2 {
            margin: 15px;
        }
    }
    .progress-bar {
        width: 100%;
        height: 20px;
        background-color: #D9D9D9;
        margin: 10px;
    }
    .progress-bar-inner {
        width: 50%;
        height: 100%;
        background-color: #8FC9FF;
    }
    .profile-pic {
        width: 220px;
        height: 200px;
        border: 5px solid #D5A786;
        border-radius: 100%;
    }
    .exp-container {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
</style>
