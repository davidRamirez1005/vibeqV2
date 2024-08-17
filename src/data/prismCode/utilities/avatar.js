export let

    avatars = {
        script: `
    <span class="avatar me-2 avatar-radius-0">
        <img src="/images/faces/1.jpg" alt="img">
    </span>
    <span class="avatar me-2">
        <img src="/images/faces/2.jpg" alt="img">
    </span>
    <span class="avatar me-2 avatar-rounded">
        <img src="/images/faces/3.jpg" alt="img">
    </span>` },
    avatarSizes = {
        script: `
    <span class="avatar avatar-xs me-2">
        <img src="/images/faces/4.jpg" alt="img">
    </span>
    <span class="avatar avatar-sm me-2">
        <img src="/images/faces/5.jpg" alt="img">
    </span>
    <span class="avatar avatar-md me-2">
        <img src="/images/faces/6.jpg" alt="img">
    </span>
    <span class="avatar avatar-lg me-2">
        <img src="/images/faces/7.jpg" alt="img">
    </span>
    <span class="avatar avatar-xl me-2">
        <img src="/images/faces/8.jpg" alt="img">
    </span>
    <span class="avatar avatar-xxl me-2">
        <img src="/images/faces/9.jpg" alt="img">
    </span>` },
    avatarWithIcons = {
        script: `
    <span class="avatar avatar-xs me-2 avatar-rounded">
        <img src="/images/faces/2.jpg" alt="img">
        <a href="javascript:void(0);" class="badge bg-success rounded-pill avatar-badge"><i
                class="fe fe-camera"></i></a>
    </span>
    <span class="avatar avatar-sm me-2 avatar-rounded">
        <img src="/images/faces/3.jpg" alt="img">
        <a href="javascript:void(0);" class="badge rounded-pill bg-secondary avatar-badge"><i
                class="fe fe-edit"></i></a>
    </span>
    <span class="avatar avatar-md me-2 avatar-rounded">
        <img src="/images/faces/14.jpg" alt="img">
        <a href="javascript:void(0);" class="badge rounded-pill bg-warning avatar-badge"><i
                class="fe fe-plus"></i></a>
    </span>
    <span class="avatar avatar-lg me-2 avatar-rounded">
        <img src="/images/faces/13.jpg" alt="img">
        <a href="javascript:void(0);" class="badge rounded-pill bg-info avatar-badge"><i
                class="fe fe-edit"></i></a>
    </span>
    <span class="avatar avatar-xl me-2 avatar-rounded">
        <img src="/images/faces/15.jpg" alt="img">
        <a href="javascript:void(0);" class="badge rounded-pill bg-success avatar-badge"><i
                class="fe fe-camera"></i></a>
    </span>
    <span class="avatar avatar-xxl me-2 avatar-rounded">
        <img src="/images/faces/9.jpg" alt="img">
        <a href="javascript:void(0);" class="badge rounded-pill bg-danger avatar-badge"><i
                class="fe fe-plus"></i></a>
    </span>` },
    avatarWithOnlineStatusIndicators = {
        script: `
    <span class="avatar avatar-xs me-2 online avatar-rounded">
        <img src="/images/faces/8.jpg" alt="img">
    </span>
    <span class="avatar avatar-sm online me-2 avatar-rounded">
        <img src="/images/faces/10.jpg" alt="img">
    </span>
    <span class="avatar avatar-md me-2 online avatar-rounded">
        <img src="/images/faces/12.jpg" alt="img">
    </span>
    <span class="avatar avatar-lg me-2 online avatar-rounded">
        <img src="/images/faces/13.jpg" alt="img">
    </span>
    <span class="avatar avatar-xl me-2 online avatar-rounded">
        <img src="/images/faces/14.jpg" alt="img">
    </span>
    <span class="avatar avatar-xxl me-2 online avatar-rounded">
        <img src="/images/faces/15.jpg" alt="img">
    </span>` },
    avatarWithOfflineStatusIndicators = {
        script: `
    <span class="avatar avatar-xs me-2 offline avatar-rounded">
        <img src="/images/faces/2.jpg" alt="img">
    </span>
    <span class="avatar avatar-sm offline me-2 avatar-rounded">
        <img src="/images/faces/3.jpg" alt="img">
    </span>
    <span class="avatar avatar-md me-2 offline avatar-rounded">
        <img src="/images/faces/4.jpg" alt="img">
    </span>
    <span class="avatar avatar-lg me-2 offline avatar-rounded">
        <img src="/images/faces/5.jpg" alt="img">
    </span>
    <span class="avatar avatar-xl me-2 offline avatar-rounded">
        <img src="/images/faces/6.jpg" alt="img">
    </span>
    <span class="avatar avatar-xxl me-2 offline avatar-rounded">
        <img src="/images/faces/7.jpg" alt="img">
    </span>` },
    avatarsWithNumberBadges = {
        script: `
    <span class="avatar avatar-xs me-2 avatar-rounded">
        <img src="/images/faces/2.jpg" alt="img">
        <span class="badge rounded-pill bg-primary avatar-badge">2</span>
    </span>
    <span class="avatar avatar-sm me-2 avatar-rounded">
        <img src="/images/faces/3.jpg" alt="img">
        <span class="badge rounded-pill bg-secondary avatar-badge">5</span>
    </span>
    <span class="avatar avatar-md me-2 avatar-rounded">
        <img src="/images/faces/14.jpg" alt="img">
        <span class="badge rounded-pill bg-warning avatar-badge">1</span>
    </span>
    <span class="avatar avatar-lg me-2 avatar-rounded">
        <img src="/images/faces/13.jpg" alt="img">
        <span class="badge rounded-pill bg-info avatar-badge">7</span>
    </span>
    <span class="avatar avatar-xl me-2 avatar-rounded">
        <img src="/images/faces/15.jpg" alt="img">
        <span class="badge rounded-pill bg-success avatar-badge">3</span>
    </span>
    <span class="avatar avatar-xxl me-2 avatar-rounded">
        <img src="/images/faces/9.jpg" alt="img">
        <span class="badge rounded-pill bg-danger avatar-badge">9</span>
    </span>` },
    avatarWithInitials = {
        script: `
    <span class="avatar avatar-xs m-2 bg-primary">
        xs
    </span>
    <span class="avatar avatar-sm m-2 bg-secondary">
        SM
    </span>
    <span class="avatar avatar-md m-2 bg-warning">
        MD
    </span>
    <span class="avatar avatar-lg m-2 bg-danger">
        LG
    </span>
    <span class="avatar avatar-xl m-2 bg-success">
        XL
    </span>
    <span class="avatar avatar-xxl m-2 bg-info">
        XXL
    </span>` },
    stackedAvatars = {
        script: `
    <div class="avatar-list-stacked">
        <span class="avatar">
            <img src="/images/faces/2.jpg" alt="img">
        </span>
        <span class="avatar">
            <img src="/images/faces/8.jpg" alt="img">
        </span>
        <span class="avatar">
            <img src="/images/faces/2.jpg" alt="img">
        </span>
        <span class="avatar">
            <img src="/images/faces/10.jpg" alt="img">
        </span>
        <span class="avatar">
            <img src="/images/faces/4.jpg" alt="img">
        </span>
        <span class="avatar">
            <img src="/images/faces/13.jpg" alt="img">
        </span>
        <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
            +8
        </a>
    </div>` },
    roundedStackedAvatars = {
        script: `
    <div class="avatar-list-stacked">
        <span class="avatar avatar-rounded">
            <img src="/images/faces/2.jpg" alt="img">
        </span>
        <span class="avatar avatar-rounded">
            <img src="/images/faces/8.jpg" alt="img">
        </span>
        <span class="avatar avatar-rounded">
            <img src="/images/faces/2.jpg" alt="img">
        </span>
        <span class="avatar avatar-rounded">
            <img src="/images/faces/10.jpg" alt="img">
        </span>
        <span class="avatar avatar-rounded">
            <img src="/images/faces/4.jpg" alt="img">
        </span>
        <span class="avatar avatar-rounded">
            <img src="/images/faces/13.jpg" alt="img">
        </span>
        <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
            +8
        </a>
    </div>` };