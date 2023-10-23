"use strict";

function generateURL(input) {
  var input = document.getElementById("searchTxt");
  console.log(input.value);
  var myHeaders = new Headers();
  myHeaders.append("authority", "leetcode.com");
  myHeaders.append("accept", "*/*");
  myHeaders.append("accept-language", "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7");
  myHeaders.append("authorization", "");
  myHeaders.append(
    "baggage",
    "sentry-environment=production,sentry-release=7e056274,sentry-transaction=%2Fproblemset%2F%5Bslug%5D,sentry-public_key=2a051f9838e2450fbdd5a77eb62cc83c,sentry-trace_id=5ff93727c64d4eb7ae0a84bead54952a,sentry-sample_rate=0.03"
  );
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/json");
  myHeaders.append(
    "cookie",
    'gr_user_id=3ff4b540-5fc2-43eb-8632-2a9c5a0b30d9; __stripe_mid=e45f75f5-6d7e-46a1-aae4-b0627207043410b9b9; NEW_PROBLEMLIST_PAGE=1; cf_clearance=xH0pOXjlf5ZspSRl30DKEM4ycW.XemfewWy5z9chsLg-1688828057-0-160; 87b5a3c3f1a55520_gr_last_sent_cs1=wRhlH; _gcl_au=1.1.1593822545.1690872172; _ga_DKXQ03QCVK=GS1.1.1690872172.1.0.1690872176.56.0.0; c_a_u="d1JobEg=:1qWc16:zSHA5GP-qqxrxK7DdXRVznULcbg"; csrftoken=N0BMYs3n4TzmqXijS8IbB4sPIbv3bVJbbes8ewwEpAmvv5kT5B44ACTUPDnBgvJD; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiNDc5NjMwOSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImFiOGU3NjZjMTMxYmU5YzczOTY0YTk4ZDk1MTkwOGY0OTY2M2JlNzEiLCJpZCI6NDc5NjMwOSwiZW1haWwiOiJydzMwNjhAbnl1LmVkdSIsInVzZXJuYW1lIjoid1JobEgiLCJ1c2VyX3NsdWciOiJ3UmhsSCIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNvbS91c2Vycy9hdmF0YXJzL2F2YXRhcl8xNjgzNzY1OTk3LnBuZyIsInJlZnJlc2hlZF9hdCI6MTY5NzkyMTU0OCwiaXAiOiI3MS4yNTUuODkuMTc4IiwiaWRlbnRpdHkiOiIxOTlkN2M1MmMxZTU3NGI0MDUxYzFiODAyNjA4MWU5MSIsInNlc3Npb25faWQiOjQ1NjY5Mjg2fQ.gOeiF_3k3kdNF5Td7jvNEjdCqSzudkL7xwz_LOlG_lw; _gid=GA1.2.767303639.1697921550; 87b5a3c3f1a55520_gr_session_id=e0cf45ee-0f7d-42fb-94f0-4c59cfe8f092; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=e0cf45ee-0f7d-42fb-94f0-4c59cfe8f092; 87b5a3c3f1a55520_gr_session_id_sent_vst=e0cf45ee-0f7d-42fb-94f0-4c59cfe8f092; __stripe_sid=2c102d7d-7072-482c-8169-4d89e20059e18cafd0; _ga=GA1.1.563732070.1688376188; 87b5a3c3f1a55520_gr_cs1=wRhlH; _dd_s=rum=0&expire=1698082028321; _ga_CDRWKZTDEX=GS1.1.1698079860.301.1.1698081133.21.0.0; csrftoken=N0BMYs3n4TzmqXijS8IbB4sPIbv3bVJbbes8ewwEpAmvv5kT5B44ACTUPDnBgvJD'
  );
  myHeaders.append("origin", "https://leetcode.com");
  myHeaders.append("pragma", "no-cache");
  myHeaders.append("random-uuid", "22f95d87-6193-a92e-617a-56483ce337fd");
  myHeaders.append("referer", "https://leetcode.com/problemset/all/?page=1");
  myHeaders.append(
    "sec-ch-ua",
    '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"Linux"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append(
    "sentry-trace",
    "5ff93727c64d4eb7ae0a84bead54952a-bb770652e962fc65-0"
  );
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
  );
  myHeaders.append(
    "x-csrftoken",
    "N0BMYs3n4TzmqXijS8IbB4sPIbv3bVJbbes8ewwEpAmvv5kT5B44ACTUPDnBgvJD"
  );
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Credentials", "true");

  var graphql = JSON.stringify({
    query:
      "\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\n  problemsetQuestionList: questionList(\n    categorySlug: $categorySlug\n    limit: $limit\n    skip: $skip\n    filters: $filters\n  ) {\n    total: totalNum\n    questions: data {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      topicTags {\n        name\n        id\n        slug\n      }\n      hasSolution\n      hasVideoSolution\n    }\n  }\n}\n    ",
    variables: {
      categorySlug: "",
      skip: 0,
      limit: 1,
      filters: { searchKeywords: input.value },
      //   filters: { searchKeywords: "2450" },
    },
  });
  var requestOptions = {
    mode: "cors",
    method: "POST",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };
  var url_suffix = "";
  fetch("https://leetcode.com/graphql/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.data.problemsetQuestionList.questions[0].titleSlug);
      //   url_suffix = data.data.problemsetQuestionList.questions[0].titleSlug;
      chrome.tabs.create({
        url:
          "http://www.leetcode.com/problems/" +
          data.data.problemsetQuestionList.questions[0].titleSlug,
      });
      //   window.location =
      //     "http://www.leetcode.com/problems" +
      //     data.data.problemsetQuestionList.questions[0].titleSlug;
      //   console.log(data.problemsetQuestionList.questions[0].titleSlug);
    });
  //   console.log(url_suffix);
  // .then((response) => console.log(response.json()))
  // // .then((result) => {
  // //   console.log(result);
  // //   console.log(result.data);

  // //   console.log(result.data.problemsetQuestionList.questions[0].titleSlug);
  // // })
  // .catch((error) => console.log("error", error));
  //   window.location = "http://www.myurl.com/search/" + input.value;
  //   console.log(data);
  console.log(this.url_suffix);
  console.log(1);
}

document.getElementById("generate").addEventListener("click", generateURL);

// fetch("https://leetcode.com/graphql/", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
//     "authorization": "",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "random-uuid": "22f95d87-6193-a92e-617a-56483ce337fd",
//     "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Linux\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     // "sec-fetch-site": "same-origin",
//     "uuuserid": "e52ad4dcd0b9e36f8694c7a787867894",
//     "x-csrftoken": "N0BMYs3n4TzmqXijS8IbB4sPIbv3bVJbbes8ewwEpAmvv5kT5B44ACTUPDnBgvJD",
//     "Access-Control-Allow-Origin": "*"
//   },
//   "referrer": "https://leetcode.com/problemset/all/?page=1&search=2450",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"query\":\"\\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\\n  problemsetQuestionList: questionList(\\n    categorySlug: $categorySlug\\n    limit: $limit\\n    skip: $skip\\n    filters: $filters\\n  ) {\\n    total: totalNum\\n    questions: data {\\n      acRate\\n      difficulty\\n      freqBar\\n      frontendQuestionId: questionFrontendId\\n      isFavor\\n      paidOnly: isPaidOnly\\n      status\\n      title\\n      titleSlug\\n      topicTags {\\n        name\\n        id\\n        slug\\n      }\\n      hasSolution\\n      hasVideoSolution\\n    }\\n  }\\n}\\n    \",\"variables\":{\"categorySlug\":\"\",\"skip\":0,\"limit\":50,\"filters\":{\"searchKeywords\":\"2450\"}},\"operationName\":\"problemsetQuestionList\"}",
//   "method": "POST",
//   "mode": "no-cors",
//   "credentials": "include"
// }).then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
