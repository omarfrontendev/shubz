import React, { useEffect } from 'react'
// import image1 from '../images/Photography/basumoh 2.jpg'
// import image2 from '../images/Photography/champ mani 2.jpg'
// import image3 from '../images/Photography/85bc0215-a28b-4d95-9f6a-a775a432e3c7.jpg'
// import image4 from '../images/Photography/katiano.jpg'
// import image5 from '../images/Photography/latonnes 1.jpg'
// import image6 from '../images/Photography/netima1.jpg'
// import image7 from '../images/Photography/bridal huz.jpg'
// import image8 from '../images/Photography/tin.jpg'
// import image9 from '../images/Photography/westgate.jpg'
import Aos from "aos";

import "aos/dist/aos.css";
import './PhotographyBlogs.css'

const PhotographyBlogs = ({ id }) => {

  const blogs = [
    {
      id: 1,
      img: 'https://lh3.googleusercontent.com/7uwfNImKI4uhezDvjXoXAp30Ab_BJ3Gw_R68UArj3V-iwwL5Q0HdNbGK4de6fQeKNips1xZP_DMyBdTZl6AxZ_dtxgZcgmunwUguXzneO66bDu6qIuZpB4m8bGXs9gBFhfEvm88nGEkJm_YLZfmR8ro1HOIUK0dQdW5XMbLSY03s1gJee-n4njyKDTJZz23Rz_GVbYptCL4eyV_lKrCO-haUD-oaxd6ijucV8bku3FeqyZsAVd56S0DsjJDrWT1pcI-Wz4PpgY68Yh0xalUh4rl_MCyYWwQUMIvzT9_eilnso5jEMVHEelBOejvQ_RPzR6EFnCP8aHDxNHEGRcU7F6W0iLqIR5kSzkPstFE4z5_DqeoF5ZjKm2KQu2QLFNXxXtkE5ZmJQTQjrnX3SjO-JogbxvbQrM8wU1K8CrFX0GGMkB2SadyuWxSBeb9N25DENnBDE3szONcxrRhfwo5229J9GaRhh1fUEm2twqbuqQiFIzf-S-OsiBlZmbTJs-GVUqLpVK_D_MqH_AgE_xTBjxCF4Zc3snxGujLhImZdBGS9qudDtrl3uuYcLkDLLQBH0O2lcKiCQxHl8kFpdRW8619pnK5Y45bt0aktjSDBFKIpKP_QJ7sLD9cMNrKbdnjA7KJoB-M4CfliHgtJ2xphVjKlltiKFwKJpmas6OsswmGnvTd7SLuw_QqqzQ37LLziOg9WMHMIUSUkT-Rtqy8zF6brPGqENURKt4Q2wgNXlJBahXcdjPQej1EFyXpseiZDJL2eHVPooW21t_qOqV_K87lXzqbz-CUoZrL6RgdtodrV_5MiQ3KOgAXysj54NN0a3hCEAQBh7oQIRDaGxnps4SCN3d6ck5FbRua_fUM9kMb9gQT7JH7NgjcLa_T2KTnlCoibX6G5FbkYzVl2WnyqVnlQbEa_eZbyeLFIguQ=w593-h667-no?authuser=0',
      title: 'basumoh',
      date: 'JUNE 6, 2016'
    },
    {
      id: 2,
      img: 'https://lh3.googleusercontent.com/Zm2g6VIVXlqsQ5L1TtkDxx-49g428_5V4NXM8valhRTk0BkY-sJxPzbJCZswUmcU2Gfuurvfks6mFIPUjYuPKclW7pv02F5LY1dZ8InKe6WCYzqoO4KleGNVwfCXhiBAiYfxMqMkOweNmbobNR5jS_KCuyr42xmNuVsK2yf1rAjIu2SyNv0j2viLEDK3NeL4nUyhgujCnfKMAa62iK2EQ5Nywp66WX_13F2Dh9u91ImIB_OBNh4OGa85zYWCTu-vC15l6gIax137Vu3Ocq7DRZtDkjdK-97bmrXO6pvX13gJrjDJf1qZr9_kzE__mhMi3OXx3CIlGhZhoi2bJ1hmoO33sTUVOrOfteEwV1eZG1392xaF-vJSy9hFpd4-4RIm44n6oyma44Q8jh66-WQUSUyD-wo-w4Zl1vhFtnWdlRTni8nWFFG46EPGTtAo20Eql9-X7k-g_AKddgjLVIltjqReY0d17eaBUSJ6ykr9QZccXHYex_q1M8Pkz3eoCBzqiSCrCR7Ou-071qbldbCRvdcU13GAh_qC06K8qyVfOP9_j69dyi1qq2N0DhoAslgcUqSo3b_zb_bqoMFU1epcnmUUEeJRgtV1CdN2K565b-uQsgF-2Z_spXqwEXMnHXQYXoykFqzzIpr235WxIEJ2geUtumF-LHrs2HnMw_GssykooW-UYVpKQ4iecuIZacR_O1RVIg45baza7EluizhAFtniG0P4lPVs7ilEoIz_g6V60SfLIqby1g_VsUfcgGy4Dp_4DtqTwk4fwrw_lAzCgAPgPkbfPaKpgJF7jEOTRG4_02VLhx9N-pllckG2GvBgbgH3K_d2vdG-A065jDj0J1lcYifycg5mPTh1qy582hGB3gsRODQzsAIDnWhqrGB_7MFT2n_Eu_wgnLGauEZhUG6VYcQL_tudn42mCKo=w593-h667-no?authuser=0',
      title: 'champion',
      date: 'JUNE 6, 2016'
    },
    {
      id: 3,
      img: 'https://lh3.googleusercontent.com/6SvfrR4BO33ms7xoBfQkMGvrPal7GVp8w6yFUmX4Bl2BX-64WjRe05iFTCOE1L88bPm7Mszh8oQOi1lp4gk0gwFfB4vsMOUAkSw-X3P_sizRbYFfkVowSWG7GoYM6t-NFZQP3OTBvGvxGcKCIEbeKeBVU8cuc5bp7tJM5_5JHVC4r-L_WX2gY6osr_WyxVK0TZ6i_dNXbv1MjxUy4rmQP3wcBw-qYfEqQ_vb2amxMzSNGFCpSWDSsqptdnVnm7SNa_NI-N9wIMVxJroigcT5eTW4tRycyFrcaDPkzvQ2XDt6WBqRF8feD9wprvdIbLEYLVkT8IVbOr0HMCl4P_WjC7g9cS_qVZc4RFz3vq-cqLCBvq6Tg2T4h1h5uY3xtK8ZWlqg5Ys4xcMXbqXapr7obexG_czFQUbQd3S0yczSb7PskH3U9SGZEwWHFTe-yO9cEejksk8RLYpsWnUsknRYeDBj8ZC_jNG8HTHvc_4Cek2bymMTf2xXhQMOHCsTfsoHcbpr7D40G--4IrM76wZFkV0SllAQYL9-sO5zZRv8H9TpX1bytR-P4fHWvqlSva-hnvJDZ8n-FACfAQ1ZxomJ7NtZWTvZZiuG8rOIA4JBAhbiISW7hrY_yN1LyB-Xk_4BtusAfckqxNE4y4_4Pu4sEyzh2rHaRc_tJ7FqKunoZ0Ww3GL4CJGZi-3thXiysUmvKfkm5zX1Ep4TPstpnwAKP_4v1gGTDAUg0ls7ioCknykvI4BXT_DbXLoFeMHEY3Vl__QkpVjOOsO-bltxrbRcL1JRqV5xeNr5trAT40dfT2xhVaMaJpPnHRcYXD0b7S9KHbXBjIaYj0N0R0-HIZYFKkNpYc4ysTQ80a9YP5Jl6WwJ5__VNOFR8dbaVBJE0InWmb0Pq6vUnJg56vHTJq5HdkincRMsQz8yRLA8WoQ=w576-h667-no?authuser=0',
      title: 'Mock Up',
      date: 'JUNE 6, 2016'
    },
    {
      id: 4,
      img: 'https://lh3.googleusercontent.com/xdK5n4Qjwgmzae6B_-Qn6oqMDr8M9UxrniFokkkrYoD8_NGLYDpdoM5MGlZfrrk-hAYjexP4HjdzkxLcG4e2tkAZbVpRJnu4g-mAPzPDny1NA_UixAaNSJOP_9EfGX7_0PlPMetwpIfkTdPQp-LZ0BK27rSwmvjI3g_c484kh3SY4HCDz0uSql3eGuPczIgOrBSDpr9sdU82_Ynjtl857sjnBmKA2UecBbSte9fZJjjU52hGVu3whVj34l-jecpajRcSv31mOAzQmWsPlxf7zudaqB8Tx9-iG8KqPWpoXUX3Scu5LLmQK9jGG-UUhxJQ8Un3eB98XzM_-mASpUeerVDUGCSmE3uAp0xL9LmS1L_TDmP54_qMWzVcQzQR7g4w7Rx5A24OdK30N0nyJRH2RLGo3SDoT7dfe6JWjVnrO4gXXWMC3W7A1TCYpxf0EhdznOB4UBK9Si9SoqAAJOB_jJ6U1iC29dWNjsxIJyCfvDYEWGmjCdLA8vEym_RfU9CmrRTEe8EkBskQvZTm5sDGgj26oLUU7SF47zaJzSlWQr6Tmmxs5fFFH3RJZ9LK3nR8O2tznbdYHGSzjgWoSpINn2oDOhE8e0xHdW7DgRYkFmXSJDleSBguQx4PHQNxluF0yZzkcXDZJadqtQ8DjUCX62xG5071x8JwWSdE3shGFKCPkDeafXwPISMDm1eWonehRInNSXDlur48Jwc0ScugnJe4SuqMteg5KB6i0fQjJzP5wzs0B7Rnfqg9rUwluGJAOYXBv9E1oiOJAFeZa70JPiAr66poMV6mW8d--6aQQqGRAjnbLJnnSllURBA9LAgaGUr27vye7-fjCaB2tTh2D3RKQJJTs1L1CVWvEv20IZaoFiDKg6wdhL1TBXbI6MgKySUKfEzpuEz-sZzXM4k2ZUYKH4lGthxos9OWxgU=w783-h667-no?authuser=0',
      title: 'katiano',
      date: 'JUNE 6, 2016'
    },
    {
      id: 5,
      img: 'https://lh3.googleusercontent.com/WImWyGbqA_xFGGAZ_OFNoC-xS1x_zTm4ylzNZdhi4YwRGNB9KpunokseWyHcBaBPDQv474c0jZzc3Zfe0BBmYbaa_0-vbgpRdk9Jhf-0YXAewULm3v2rkPLI1i_c5WrgqoqUAE9xdEXPJrbPCQ4DFIONUTiRnhg5dNAIa4yjQgp2foXrmPP9VbkUzFQymYz0cvDWdkKU_7wpwPYC5JJAv9xmT6EQVf9Y8Dz4rWZiP5rHzp0UCEsFONVw9xI4RYtNNbDPuMElNoaYIlj-HQOjPVyb3KGFL7lqmWsTOzEPzPRzmTGbOij9L32Gi1FNRFwtzUP7-KdbplmZYXs8o5pp4hT-tdLeMq0WbXSR-oYFE1qdiNTSKcwFSBbM-xlhXVHcW25fUu0ticNoob3uGSNgK0XqIYEhNQgCSSBnC8guIoSIrJ14sOQJ1FIDY5iW7CY7aBH5pcSkpPtGiBcQF4fCRB6Luqt6gBrNmXxSsN0OW7b3VRUxOpsY1HtXJA9e66143PeGM1UIkZb995DGsq3gqzdzowulKJUr3nI4TeZ5vYqfvY1sClCVHEvZuUW7tmcKk4BUNAgR7sEoQ1ECAeFrh3_Y5lzLnMGQVZKgF7oU3R0SbaT5nkNuW0Vewj4pda50uzBRoa0bUOaVc7e_RIG-Olj6JsoNZVJgVBDB4VwHT85sg65YXDyrkDOzy1AtyMUyjoGjboTxKUS7lNAd0_YJYRpqIjk21PWP7CtVskttHSwk2XggGEP84vElvxaVIWe7MPfiEcyyyCigSE_L0bLsruy9JiErZ5_kFfkaH87K_ilNPPPP1sV-9nMhthDgqNng8T7NZIxCIXQUfdBSGkddY-YWvtqyIBAW2DZQmXowoCoqzm2Hc7ZR_CErAyaSa2HWtG5qVq13nt9cPj-FxGFwahEOuapg_hdUIWyLnXE=w609-h667-no?authuser=0',
      title: 'latonnes',
      date: 'JUNE 6, 2016'
    },
    {
      id: 6,
      img: 'https://lh3.googleusercontent.com/7guL3s2fnqDtzOaIW-_ze8MszyK_JBRcZgybHMVi-icekwNVWCk30nnAYTYgLVzJMd3Raj45eaBo6tXAJRR8SwSCpxdwYCTXP2Yu9igREefyMN6ZYzAI2eX3pqO1iU5nNKyforWbZ6QyDNTMaMWudzyQdZSeHGjns3NUhhxctzJ6HrHDC97IF_GuWkowDwQC_m_cnC9WP1tjVmwzzPnYrUKcHjQ8hKmKLKmpYLEzO0rUBq6YbtvbAuMaAj5gs3RkeS7X7b7eOG-6Nk0SaZ5gwvYscxAfTFAo26z_nBBvi568HZZOPxMOa8TDmjYTW9wUtjlPlEASb45Fhv9BalRwXlbhtfzCtVCpAv0ALKw1AB7QfJotICcYMik5xzhyIr0n9If6BtSvZ-0VYJtGvEUuNFCqdC9-Bhd9lt1CWZhA7doMBZTBzkJtsFG4fNm5nzGhOuub2zfoqPF7iby5DKS0YhONiGW8Sa_7idzB_7sCVXQsrP_yMGBepbwOc5kVzHBndkSNwZhaPK15xqeHSLMHYi5U8YIrr05HF2nii101PhxNa2UHhQMgTMRYUMzJIEucB8aMxrJxWaKIQzwgFQ4hAcRJpuHnKbnwj0z1VlgMLa_-k_j59V0LjDC0WbTdI2Hc5UsFXpuKgMHqJ-gC49iYwSlqtsMFKG5opOW0_rNWdJCV6jyq3f3vCsnswRecokor_vO81StoaJQwMg5Cit9GSUITeh1b95Jse5vOUlpSNl3EB8lE_S1UBfkjKiRtfEiEqI3_NtkypB79HRKxvDA_7phJSpcUr2TdQIP8J2YyThkEqGquSZjy2tVN2mJ78HQm4cGg-NamUGH2JTd9xppSINRHkXXjzgj7aUQobWoJW013wYDLgBuZSU-AHPtr0cWHv8bF5ec0jAY-UYZgDqVUBbtmnn-Z3d-2UvNpeY0=w593-h667-no?authuser=0',
      title: 'netima',
      date: 'JUNE 6, 2016'
    },
    {
      id: 7,
      img: 'https://lh3.googleusercontent.com/xw7wfI6EtlaTqL2jU89lTkIvRuTMf-xeGe1HrlyulqpcMhGYX7UXz_J8UX6a9fGxD1YR9oO1OLA7eX0E-lE4bGRhFrKZmrluDtNceYgzCQuKTtQ16oV4T1KaRXxSC5bPh_2kobqezRq_VTt9Qhtc6xqK3aFj4R4iuJyQVxwUlBlu-MsPWecLv_wCbs0unTyQZ_2395Rq3iccctmtYqAvNiPMBXydTDQ77ZbHYXPkmgwJ21RwpUALlGXifPaNDT2l_oNXe_qCiH80ETggTIYuwdC_FVCbDczJmmzktyHFdgsl_7jewjHOOViCB7MRxWwzEwr0HkhNvbwMyM-hUQelANqvTaQJfYNk2YWz1NpcSGv2V3oYQMAAQ7NrvHSkwSRBmbWWF4Vdt4sLsgpRf5I-nnrD4l1_8L9sr8MYuI9OIeZdNYF7GIG1S6tMHIBtQdUtW2ekWN8v0xqaX0xh0Byr9XX6DM03p9md5Qco2zUqldX66-yqqLWCXxOuG3EUljOPPXrtKzTCEfkVFobNtv715eXNIuppSSmuPLQKnelrLHSS7ItBn2yBiScHWs6VF6Hr_wBlJ-oMMABVabL04WqzIk_c_AsLofm7pC-3ABRyc8OrsC7RbFSygmxBn45P-gxyJo6TpL3IH1_Vb6UqwU5mRvt-Mx_le0T99tvQ9rT_lal09flYrlQPyqSQ7vAnpNJNbBDZQjM4U5tRrrH7h0eSGGHVWU4_SMEEhvpIijRSKP3iRysMafHCLHocHziyv4CiwsWiRzqP-qJaMeI8efJYxxaxkd_vQ1hCEAf9vwRtrFtQrfdlOFYOOTopVgIPL57yOJm7BJ2h6I75vON0bK-RgffRU1GPhYnfQseE_JP9HhBl_3VL7ZPA9rVVscQJ9KdwPV9sUfJwqfO-A7ca-e2VV59ZFL9Kl-wg93gOmb8=w593-h667-no?authuser=0',
      title: 'sweet bride',
      date: 'JUNE 6, 2016'
    },
    {
      id: 8,
      img: 'https://lh3.googleusercontent.com/pGh541Wy4r4Wa3QTp1NT7AwGPmEwhpbq1OIO9YBZGaUA5HT1_LJGrKhVeL-QVunNl9UripcvJZT_0Pa_DT5WK3TCNQxryS-qmkGiGPD70fc5Ri95JCXlYqBHi2iZwadq04lnkx5yYwf1M_zgataEvNOvg-Aa7n6YMeZFV7fpA9ug42z2NFxf5JIpwyB0lJu92hiepxhGysuS-Ex4tVyE8h9CJdLoug6nmEZag13yCg8jdrvY8NvUmPE9KLFkHDhNklZ52q3oT9dtwPzQ0kv5GwM_QdgupOk7M5PrqnqFAmiOYMVT_QM2CjxbNfn2-k62M9uFIGYTvjsCKqmOH28BeZ4uktoyWi_FK0ZzwaEjoQUV_lBACTapl4ELjiS2Kw7nGlpkUVrvEc0yIc3_Ya1OIe5x5s7IhGkyhBbf6oknzY1FrzzHksHzF-YBYbqACtuxNTRoChIAoYxcnLtSikkYEDHkOfdI5NKs9yoZez0nZTSGb1yx4_CTkhR10grEXVg9rt1StvlVQ3lxGWQbdUYzaCoaSH7lmg_eKl-bZpDzyDnfxMXlbbkJQdLnopgUJnwwzbBvwFXDie--UJFfZSImckm5w_3IyDWA6cVtsz-uoVzU4jc09B5ADfvAaSTiD0wPt6CCFBgmWJW5uC8pVjehjG6kBaOOSmHa_1tIvAb2zZNYSBqvDkerwqoi1gpLS9QRTO-51zALog5nub9MoQpBxca4PLRtruwH42N9PsyaABpo-ltdwiEdQTF0LZ0FBqwYxTDliOjcH7kTv8fOyvF0g6K0frkK28qWrSyfsE8ELMs5Ad8wjuqm4NZTGo_PrUu1aZaaj7i0vsJPsoLzp95ZI53ySQSuFjRo_rq6qqQCPV673UWZsVLyR7lfVo-EPaOHP9hqq3i4tHGk3rgP4YuXjj1tKvnSLXTnlbn4rRE=w593-h667-no?authuser=0',
      title: 'tinaries',
      date: 'JUNE 6, 2016'
    },
    {
      id: 9,
      img: 'https://lh3.googleusercontent.com/WGP42OTVcMaRZd6KmS_eUcVUN4yJ_qRF33fP1A5suPaccDRI_5EB8LkYxy0jMIW5ndjd9Q0z8PNsvtz1kH1cWlctWEyHeOI9RbQUJCRH7I1A-M5L34W881EW09GEY9C9MkYWLO4EQ49taspaZjA5k-ZXtBKIAXRvMg0yDuJLUuXcbO3nC9FpzlU0Sn7X6LSL9Zt9fRh2i6EErqr7mf1PNejKCOwZCBQ-7M0kd8b9Y_Hpy8C5-3quqVoVndrkgFtwY4Z63Unp1GskW6_2NuSXiA6J0m5-p-3jhlsTPmeJLum28MAjYAfciKR4BHFP3LKm2KZA4yTwKWOGeWuJOKsz5dXH-dRKSIrFdwd6l8z93S74c7AyId6UeiZ-C2Zdzh--IcRSPNZf7K32-Nhwe3k1JA50nd-cjOFZlPZYtBPGFw8G38Pef3duATCj-rbuB6tOPZ9dw4PYwM7AwYzxm1uitbZqxNR2tD5OQluARHBoWevNpHc_rXANpMAMmqtQfsL5oPzKs2jhSgZ7DFfZ4U6_gLlShqRdMywCeEu7u9gC4IGnbA2Ukvmk4YN12Hw8UPXBHspBbLmMeQnt1SgO4OJ2T8-iBqogPbTrSaKYtPuvqiPiMawonl0EkZMskrbrj6ROiCd2JtEsLXChzD5QlQ20b6hpQCqna9IR5-pDuOwvYKOgfPIiYo7Cz3DdeLXVYcEa1_KK0C7YEVmAktgh1GpLY2My_mcxKhdS-NLitYnDWmW60vIGCPWEqJhXi-xTNYJN3ZvSxuS6wJjIEpFkYdVjolOg08QKOYzZR60j0_I05qpJnsuPiYea9KDHX-Ov09c6gPu2ahBZNlpsvTjpxCUS77kf4YfWgx8scHv5-nSyCOCcJm6bTiNFWYSW6BZfnjXlK-v5FP4BWc8s37VwfXbdtkp1rX_wkczIqPqIDLU=w593-h667-no?authuser=0',
      title: 'westgate',
      date: 'JUNE 6, 2016'
    },
  ];

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='photography__blogs' id={id}>
      <div className="container">
        <h2 data-aos="fade-up" className="section__title ph">Graphics</h2>
        {/* <p data-aos="fade-up" className='section__subtitle'>ARTICLE, NEWS, TIPS</p> */}
        <div className="blogs__container">
          {blogs.map((b, i) => (
            <div 
              key={b.id}
              className='blog__box'
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
            >
              <div>
                <img src={b.img} alt="" />
              </div>
              <h3><span>{b.title}</span></h3>
              <span>{b.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographyBlogs