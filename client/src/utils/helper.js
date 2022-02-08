export const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

export const getRandomColor = () => {
  const hexCode = Math.floor(Math.random() * 16777215).toString(16);
  const result = '#' + hexCode.padStart(6, '0');
  return result.toLocaleUpperCase();
};

export const preventXSS = (text) => {
  const filterText = text.replace(/[<>]/g, '');
  return filterText;
};

export const getTimeMadeIssue = (issueTime) => {
  const secDiff = (new Date().getTime() - new Date(issueTime).getTime()) / 1000;

  if (secDiff < 60) {
    const sec = Math.floor(secDiff);
    return `${sec}초 전`;
  } else if (secDiff < 60 * 60) {
    const minDiff = Math.floor(secDiff / 60);
    return `${minDiff}분 전`;
  } else if (secDiff < 60 * 60 * 24) {
    const hourDiff = Math.floor(secDiff / (60 * 60));
    return `${hourDiff}시간 전`;
  } else {
    const timeMadeIssue = new Date(issueTime);
    const yearMadeIssue = timeMadeIssue.getFullYear();
    const monthMadeIssue = timeMadeIssue.getMonth() + 1;
    const dateMadeIssue = timeMadeIssue.getDate();
    return `${yearMadeIssue}년 ${monthMadeIssue}월 ${dateMadeIssue}일`;
  }
};

export const getRouterParams = () => {
  const pathname = location.pathname;
  const urlArr = pathname.split('/');
  return urlArr[urlArr.length - 1];
};

export const getTotalPage = (length, standard) => {
  return length % standard ? Math.floor(length / standard) + 1 : length / standard;
};
