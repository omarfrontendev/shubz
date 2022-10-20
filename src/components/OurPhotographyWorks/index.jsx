import React, { useEffect, useState } from 'react'
import Aos from "aos";
import { TbArrowsDiagonal } from 'react-icons/tb'
import Button from '../UI/Button';
import MainSlider from '../MainSlider';

import "aos/dist/aos.css";
import './OurPhotographyWorks.css'

const OurPhotographyWorks = ({ id }) => {

  const [all, setAll] = useState(false);
  const [openSlider, setOpenSider] = useState(false);
  const [img, setImage] = useState('');
 
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const works = [
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: 'https://lh3.googleusercontent.com/NZJpiV8SQEXbCxy-YXHxQDGBp1bul9Vn7zms7KSXoqW4vuDCL5dSWXhs6IAYFL-mSwZhWzMEaE-vcXn8XVXJ4BnslAU_KmUNK_Yv6Fuu8_FZRjSO6nII-I1DvIIrE6BUMw3u5_xO6XgpZrqLJ6BfwiFPh8KMq1WkVDxyh-tLJBK7Vw-uqdagQFkisYEX-geGJciBl1ZhIZxV9tG6CX-1jooiCBbR4jd65dRGKhoA6eUTTPl1O8T1r6ShJo0dlG8j3IYTCfd8HM0Za8HPZQR0EfPAXuj_LgtYfCA37JVV-aZoW0UcJprpsSjTsEpwt0t783RjL7ESTE02hClgQzgRu3UwrQlD0L5KydDHnYIbvAs6xJE78X2oV-4YiKkVXmTV6KdrX_FSC5njF2f9mi3ACSlJx-ToRLCWY01NR4nRSNlmpsOVWZdIShrea5r9c_c1y4WRLkYfYkWOXjbTqIHzkJbkZi6v0lmqw76BGp-tEFUScn0_oeJycXoaIE7lIMP624ezSgKrC2nuKTpTKh6Me4BaitP-YnmHr0G8S7KjeSiW_3XfUCgpttnLjjfLbqEEzq7FCexN0vsrbHHRIGU8j9XhDvW9uHbkkIAa3chd-obnvpblh0wmPdOpxmQevHeJ_z2SCqitMjitSGZsboWA_zMVaIhpuob9_gcK6Kyq6LwHn4iJVW5FwpokFN2k_tYYq5vkCVGH1PE9U0vQgJ6XFCddRRWnAU32WNypEmv9zMWGfMURexGdrAaM5jSDRinOOYuP9doKBSu3BuhBmQYfF3kpOt7epJpcrw7ydFF3k6BSZHxQl6JAcuPFEnwJtP79AlzfJbXKS78XeLl-hEvXZ7DTF_sjujDJIydS-V3rt1r0xKxpznNpIomBE0pMIpJggdBWIHjBsGyPlaBmPEspTnxQIg51u6XL7rAST-k=w534-h667-no?authuser=0',
      delay: '0'
    },
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://lh3.googleusercontent.com/VGjaaQmOnTJpx12C_6iz0C7XjqzjcBIpGFJKEa9M1GsKe0ZdYjZm5-gFH2fIAwuivh6ynRp4PSiDGRBTqul-diAjxdf3mzRNQe54l5Q1TWLLvYGN0psIkSmccjFq50yTWotmcmA7gVIpo4vS1rFxY0XcXaB-ikqZvlVB2QrNMoeBcOjwWn4-TtLbyuRw2YQ8v3pkrpJg4rmTlPqDV7--rfGFHwFSPHoSxJY674cnNuHA7NlOX_0zzQpt0reDY6gX3j2MrHjIboPOuOg14GcJfGg8zjkjxEv3XohoZF8su8jjq93fQd5oMmn0Hl2t9bMT9PJ2_5zf8VWC613jkUViuXnZfqzT65izzK_Km_as8qtN5KyFM6oLX4nHXFmvldomhUj09kZAq-k4rtP-BgprigDdqWM3DRZjUt_voKAwlZCngiccGgZ2u1L0iFeieDklKJlqGT9PknuYGuy4LyyC4p3YUZWMlx7xEw8h4fcExICh-Ia4Yy1ThLBiBi9FW_PhbeuO564VdN2ARNxJ6ASh22e1DCsYe1Jn4isEs8lR3hJdFmgZ21NeaBAoqec0V5tiTT25T5GK_HICRKVizODw-xFVi9F53QKEYzVyxpLKF5Ks7ZYd8BdynaVk2bTxKBkOmdl6Qv46q1pb8yTrrmwR1JuGlo_CFua7gOE-LaTsNNQCnyojYNx0Qbmqpwv5gpNul1fDNqCPpTowCIJxhZxCjclYD9_F916mmeFc5FX-qw3KcePK7KgaQNtzqLvmqi0R5UtSYESGpp5LSAvUEQWj2YYqyLvmPtuCM8jvlpCGZ8XcPR6X1lTAQLqiocyDz8RyBpDAtjZHJ49s0wPxm0WlyYTZ4pc4g2TLlT4N-PjRXXf894dT-PhUhcqKmHpV4G7agYO-aHxgKKBZsfO8IsE9_jw_BoN7kb3-D2nMg-g=w1186-h667-no?authuser=0',

    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://lh3.googleusercontent.com/nA8NHIcv_J-SVqFgl9fl8mYzXYzYXeJqoJc8R3Jc9uuP4pM3yK2RRORYFJoZf6vQVdiFpZWJw2q_C-zuVIQID1BVC7QyXfkCEp6gAaYKsrV7Cga_B3uSMolZRj-nvqXxwMUTYDaP2Fk8gH714q9_VF_Hbpv0bi-Asz0E89N8Bp57JhX9Q_QjdekdRvNoAvLMvTsFU3cE9kz5jMBW1rX5P4FT5rCamh9KKBR-T6h80I0Vicy6w0hkxoMg07n8_aDTQ-WGLctyj7HWD3plFsCU4syoC-NtWMgLQCIoGRtF0hB-1tnf9uKS9N9f2l59lS3PsDqk1kwrW1kkBmxMRCm9WIkXQiqdu3oSVD9J6fJ7fdEm5GwJW0HQwD9HPQ-qZPc6Pwu9EGYT5wTGtcBy9J4FGOx_ix9ZEYvsWh5OXQ9TnmIQxL9RdcXVXDGCGQ3_oZbKH6wrQeQKrZkt_KVlo3pdlFmToWfcTruTDrdRaj9oXbVN0KSF3m-CfgErGVGN5yaVqNcg967Ufohiw6w60FLSo2VGKzOEOXtd_GBl7aqc7c87ukeJQipDvvU0mj3N71mgCKTUle5LJ_Ju_yeTQTULEzRe_474Y6lxMEv3MPJ7eiKlZ0Dd0N2P-muZVjap52aUfInD-Q-lgMqsLXZdzfZ1qBbG-reNW2Pn9AK9gA_pDC8SmcIFWvu70I_Ddkr0J6hwtrpPcyVebUl0yVOMi72kXNZUNDSILH9h4dBFrY13DunfVAObx_04EOwQoyNfgkhpojyvyQ-oPNSrPudNrUz3Otd4JrJlB4jR-nLLA8qXqruUIg-FR1o37PGs6DdVZxkNlGuFJ5p1Qq1DSyuumLlCBov0mW8Bq_jzEWEUf9RVA2rLx2zYJMDzL-nsNkRxfwIi96XhIX229Y7sgGwkwM_7OQBu_sDPnK8cuY5UvEs=w1051-h667-no?authuser=0',
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://lh3.googleusercontent.com/ItQfZ6DXGyPTpJH_MBUM80dW_FUtVvbeE_-GwriXQv6i_4AFhWxwxCx5v4vGB5HzL6P9SfE7p-CLt3_xrCxMkSrU17f-KFEsFPATlm1RjbSv3mYYUYRwLGwq4B81NoFNScU455nIfIOaQhGLjL3BUThnFvMEFAr5qHU6DUlz_PGvZsiYgDckb2IEkaX_ZIkfM4PeRVLueGW4kUSj2BTUKK4P4OTceOtK81TOnFJJcNnUO3tEGd59wsMl4gTNXq1_kf8u1N4a8e9n0PY5ovf3fBsDNH3QZvL8hgXki-EJGc6rBzKlgRncSO2BgZLlvvW9b_GsD8tIJpRhXAQqfOc5dHsEgScVtyxXUDq7IufvsmkfqZWY28KwLqhCQu4ZLk3VX7AqEYTsyXDtw9vRTele4hiYZkUBjQPjWNnimElLFJ6AaifR16HqybYCEl41nR5lk5Klb_aQx58M6qwu90D6w_2q-3aYww0u9XZgsUz9oAc2KpH0rfUItwmJLyyiuebywyBzM1bXkSBlQRz_z321tEdjDx3M8_mhTS4jvVpdd_FmB3TpHXp8DrPh0WvuE5EKSKwjZoplttZtnmzOVMpVeZyWwx_Bbea8bKHvb0v_rQj_N7z8k8xJxz7z2JtetCieN55CyfNLnW4ylVdtunGCXJj6Le1O7iHJgWr0M3zpU8UCyl4s_mYkeNO_iMFRlYYxMr00laBbPrOK7ih07k6kfwxQqHeraBYmJ7YkrNOrq4jyJuwZB3s-NMaL8h8la0zxgHC2BinVC-9CoVAfCeIkVCyk2euuqMoTDhFyVGZkY305091ewxWrcI6Wlbe9wwnmPCtmVpH8zSglXF71EoUYEEJGiM6IPf1Ctyp4yS7NwOOm4VoU0tXZLl06iPZsUAhDbCUndi9Mueqmri17AEshCtNYt5GI099s-vi6vFI=w915-h610-no?authuser=0',
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://lh3.googleusercontent.com/lXJY-4OVwffKatN4lbZ_EXAZGoSP8b9FX05sUvn23w6rJTidjeTxJgEEZSpChbnUmOJn5nNx9TgDzdtqvw2xjlEId2PRPfHf1G7byTJ6fM856B9mZe_J_-xVMzPbAMsOMOuiIY7V15DNyOZD8Qp5pP5m5rta7LBPbietrMUGBe76szUlKYIMVG3E0l5MoZW0dxhN_7cNF16-9TCG-K8qXxOnDdghtE0fxoSXwcrO5JHi-bKJDxRkGxHpiI0IIi5DxRLCg1070QgF3fSKAzHttkJKvnPl1OSt4uYG_EUpPX3SecA_nTGDBWrLtPm4emIPT2iySdqw1BKAQwPDjcZTG57vsIroQWHCa1NgTMbRFzhSe3uh26CJPcheMpSce0eTPqYc26xdQ_aXg2RHO_HTjl9gKIjMO8DzNs8blUhqbjUFuMcm6qQK6BEx4AzLUWLVUN_YQmTBKo60SGt9Tf5kixd9ngmReUnQAG5tuYXOH8zRxekg-oaaqlFy0XTKafEoG_8O_4TfXu9IBb-6qtI2WRWtNO741BN9oMzNyUlLoUc_1UlOwj9CeIR8IsMaBBG5TBAbXUGsvxdKwEeFYWiaVCuIFKuTxnKARS7WSpdWhgZS5oDN_4kMXopEsBdYOeEhyhzoibpQMaAhVxSmyJg8suXRdkdvs8A26EyC_ZcnGS7pFsXK0z7-cg2F7F7KLfz_7k3R9ra1sBgg3SBDDOCVl903pRAvWyEuuW0Jcl4pcY2K97C1LPuZeAgB-qNf1f1mGtSsJyhqsaUtpyOMaVFHw2qdh77PNTwCBfnovSAyZlzOYoZNlRHqx6daNBiD5oIGK_vDxu0cxzLjDAVTb6VjwkOX7uGbStIGiWyLGKaopF_qZINoW7GntpnZ66Z4ej-_sh0CifZdZLFgq_MC-IyDnxo-9PDrF0KYkRFAucw=w914-h610-no?authuser=0',
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://lh3.googleusercontent.com/Gu31-ubOdxk4VaKH-JawShkeWvOn1hpvR2uFzE-USH6wp4TnwYDZUmvv3o4DbmSXRyIDyhg9J9jP1PEvWjbFuUcyzQobVZZfpD4pBZszKnEhiUUL3ckOsLj2sCaKrqaohabIpLGZZ4DP3jOwYpB-OwtkivOuTZ1X3vBCNA9yZGWH8oyEPBrz5UF94yzIGUU_tmcZWXyU_c5RA2Z3IhsD2jOUc3ODrVprPBglV_llk_l6HAJxSFFTZA9tSnFWlgNPVf6bolRpwzMqK-6PiAgZYskjs_MtQVTkJq-q7mX5Vcixv_rtP2XB347J5U8z0flNL-3I7YisinsaY1L9hT6BLW-IuM8L_reIqAkcaC4lM-jNJ6zxZfvMlJIwiZxhnUESwGYISPF-rgSs40tuL-R5ObNPgGc_iPQDWZTLIoqCdZhZq-3_crHLmsjB_NMKDWmkbgHgvwMtpjGXmq8lgNTRa7hh04MFKfyVfU7-1CyPDXDW9Ghz6THb8hH_iKSnbSgnQdFlqkI85VtrVXCFJJ5vkQPKlVOAbGfIptnRDO8mMsOk-ZJc4qAMZPp-Sz1w3n67sUy2Nzn2eZg06PW63La0BxIeb7aRCISm-MkcgUSekaI1fNNAJq8CvLlX6vDbCeA9u9t11IX9lV12jsYDkW-u3E-NVurA0IfmdWgTLf9JmV9YPRTMtpOPHCWP7ZiFYkaR2aDov1BdoHw-uok5bpYHz-tSvWw8QX4_t4ndMPJBmNCmOzUYue5AYPW-CvmbiXAxNWKEqzgSnKwIYqDB6E-OG05PZrN3VjtDlDmbExRBbmCLlHRsyiwiNSwP_3UmiBFkNRhCYi3MmxJ8z5FBjHvspi89JuZ9cHgU4dVIcylo283LMLC0-HEzrzOdO_xJtpOvBLykZNAPVCNOkYYeu50CTJEY_d3OYlAL5P3GeGc=w328-h410-no?authuser=0',
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://lh3.googleusercontent.com/h9icbtuaTh3grpxtUUIzhcdV2cx0SsnTgA7AV4XMzctDn2x2jlnlyZqQGjK-vqYKIPyw9u4atdL58k7UG2B-rGjn-bfhmrTkkrKsUeGovz5QZXiFkMRNC9sxO9etBrVDXGtQ8w1sZtbljkzIMMhLeLI5MD1NtphE6APWbH-FQ1h-WY7x49BmU9Cm2l9SUYfo7dtYkZ4xgpgO8gaz9_rJ8kLXD6UyPhjx2q3IXOoNEN7LxE5lwvLLA7mhThF9ZE4yCn0mXAhXw0BdMX8hnenhM7l29S1KiEuz852Tyw6vGDFxO32BBFv4YE4th__ptcfeRYtuINYgZ0OpDW8Oh40W6RPqdKXJBPagt204NoGMrgeNU0QHvZ9xSk1QKOLEYDisZbCjD0b_8mySdlO5ra9wICw0YJ-b0fHROhRPU-48-uhHZXLeYBYfXNudGdjOnxFRaWi25qVz4YGnrGGYZ3E5EM9cFh-zQsA7kOP_llLcClgkRrZM9QpYCXXbLEuRsDoU9olRCRTHh93k5usdF0g4RzybR5UGUvI0a55PI1F4WtMvQFk7vn48v3-gjosNeWKHQctFx__-6aOurtkqxrhPWxVc0NoiuFmy2tKTi2S5qA6I8po9BdlPI2bc2ZBRKxkkXXJsoCTojDRSjvysdVfBH5hedphZtT4UI9s-1NJLZUigFeCHQ52CWFXJIlt1WSJDZvUz0KpO-Z4RbrthFjQb8Wv90c9ISrTInhEyMkwmMRAwdofZtg09ZTITLd3W2YuxxiAx0tOucmqL-NmjGKQ-FY5EBr4LbaMF8hB5K71vIPpX46kNdaxuX1Pftuwa6_oS9wZcBsshze-pt0XUSUTf7TN84_yafmdysGb7mg-W-AGleTnZ6mrj794giy1w5j9PrAqaEr-cUG2TYUulZVK_j-m3rvvyW19OMmuSNzU=w458-h610-no?authuser=0',
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://lh3.googleusercontent.com/zkwW86oMEFerKemRB0cE1Abj0kOvRGo2GPV17D0BoavH3JfNMCLE_W0SdmNdO6wKRphnHhxuuXaTmlP8JJ0uLkm-QKnM864tF_RURxldlvlYaxxzLJuyzwCuq4P3BgekFNYCh7UvyJ3WEfJbQGCbyOmZ_4yaEblLNfJgsKCAXGH7vMEal1ZcNJkDh140T1ILj5iXW-5Kkw8AXQaWTDwvOKHNvK_kKBVShHpnnn-N9fMy1nw034ZtTUKf-BPfDwTxF2Gln01c_Y7Ecxd8lrrGg8au1vogUeC0qrHWR1qT56g08KjS1AaaEiNepYrxyCKbhVXQPx8d7Glnw5iEuvbWUrtff4ZYm1ZvxYXRJchqqNzy4eHNJUHVHeel1BgXrZjbB2fA6yUBE4dpRdd_DvgY6adsdzy6EQQn6-01qML8YiPUga0_2zb8xY37KN6hhRG8NRCPbY-iqzj77p5VDCm8HIeu01r0dmIHCQLOua7DOt_4G6yAImmJETrs_oE0z11xQ5Inq-5xdeoloafMi1RumyZCJxzbM8LODuPgMoXlhXFlZ_AfSCAsfb7alJDLqRd3hv6POLodOzr8gAtm8KmZ-JYMAuRJVpwcem-soEG0t-9rjcWh-LldZ6soPaRrApeVhBeGsZJSD65A-0zCVYErYs5-uDaDu4SqIt_VlxZfD2Hq7UH3NMiv3SufRcG24heAxUQJk0OloXTy2TeZrvwrM3F8nX_MfvQqQPV-RkPy-1r2UPRxNw2Rq4IHTcochTgDWR0tI1g2_12_ZNoekIjgM1C06DfZe2fxuuZlH9yfBFTWDgv2tuQk1tnvCgTtkf2ejMPPLuXudZXWe8bsW_WfLSo6CrbGtQX48tsgGYAygRST4PwfED6C2dVp39sQPn1RAqfnOEhgRDArMudXfe0KAOlze8GXSgVPQ3qIGro=w916-h610-no?authuser=0',
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://lh3.googleusercontent.com/1zOTG9imGQXR-5tw89ufBmjIAGJZ8I0MATGMk_2HFvquk_exQflhaLn0pz2uD5daq_n2ZFWmbt1MqFjqKC91OngYLBdqOs6s2nAoO27fspBTux8LQ26kRqQN9jTRLU8SNZdoJCNKeXcBVP1EEROdis2J719faWjg0XZ-wdPRBKP6OBoi6U5IokDMNgCXb1SlR3xqiB_2w9IFl59Y2LLzFjXeTvMdPDtUqZ1-R9eNowJNGTkidFBDsPbHW_lV3sauu3Qh5C-jrp2IQMaWNAikpPzfDUpA0EAsxKu90S1IRKoSEIpTRLLS-OFb8ZviMKV5RFCXzy1_JJEwffyP0epD29Q_SCQf-prylLy--gHdUgBytDegHFsRQpjwWgKXXLizkOFsw6w5DblrXdIg5mEmMT9JU-BnWEHk8c9lLEvOGygJZJtaQLCrlz2xeOna_wbubDb8C1LhkL3mzmMC9Z5kgGQAr2SEaMXkb4VdOprTk6Q3yP1jpFajB4h6BWPgsu-O5PxW9yJuNXDCGsbybWGhs7-PL9ZNIvWjdy2T7ah_2mJg9E0PhizKoJAYmpMxfxD9aAkRngLhSFR50t9GeKwznH_LSKPqc7QBFqGh46pltg7N0bSbYHddzGxdHNY0YbPf-y0eenm5Soi3bBJbNbl9g67qrOjVFfwHTpU2zMHEsTiD_Bk4Mag6S0Mc-Nd9aeyWPGLe0dsZ4fUmCdEOtB0OGh2eoZQSyL9O_28OOXK2Un7V6YgrA--Og3wwzatJckx4kmp1TT5fkUcLl1zHCdMda-PUXKiSJQGrfUVlkWZ2ilOy1ncvGz-2jYDYqvzG_xOB198_TWj45jszkVbxTrIT3ob3utx4cohS9ffBRHFjLWEZ4ie3OzWPe8cTmj6kUhsq8JGWbZzx2yRxLS5BaXvry7GiPMnI7eATRL4RZKc=w407-h610-no?authuser=0',
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://lh3.googleusercontent.com/YUO9syaMCvQgdhNWZPzU4jFdTL_whvKkb3dIorUvbOM2tiZLbkMXaXOVhp_oERfVWkKNzzgbzGkx1F2AZwp3oEblK9GylLtSJJa7n-eWMceFNCa7DGj80Sw8YYr9AH6tyUzuZZLrlJrYdhBiDip9wc6sROu3IRSnpB0U4Nt39PFmPvkUxgFnOyV5kCGSrp3z5bF9x-aGzzEpU5FG9wIpwuxw53et0g6gi4nxasjUXRGrSQ3717sadcH8o-TgkTZ5jDxavx3ybLgqcSMfArdTSYBhnYvh5ApXJp2vB9JL6ZRyy9pL0ZvoNX9QTtI4e9BajX7K2jBUs1SBubvIxg0tolfIBEfPMNYzDEmPWyqhiSsDTQWAc2HzvrI_Fg2AuGUpFvPr6PAtpPgGdc9QTOtuQF1iHdSK6ErzkHmR3u5KgI3lLJwt-D8lLXsTw_BUinedjV7n5YJO_RpZR6KIEzHMoRhrQwZ8KTAO4pU7dJbyzs2QxiU21RznJyK9Z6TDYhB9_SX47eFyxoKZm_jKe6CRAPPmYPCoej9GaS1xmUkESXJS26nqw2j3t3mcn0jQWc852FLCTy33Gn5dAoH4p70-_dO0GBQl9lUB321Zht8aiARjzNgg30VjicMn_roNNp1HltWI8o3_9ShHLGa8dhrG0F7TQEo1kQ5cvvhiVht2JQxYdZxMqa1aLZcDhCeHXNVx8lGh1P9uF_IbTZTDJz09rtsGbb9_ulXI3JRo5u217cLg1KQnIBEiiIIL_vi0LJwzn7f9GGowNCmaV_92wTOnGBU1BYXigFfGgUNdvAfUAn18MJkRg-Fj-zmtq04JILl1AGJx0CHe4P7uiaAHamJWwRTVPRlQnv7h7g64QJ4F15t65MslhOJr0I_ArSIKbfS9ChBuZOldvRIIhpfQRW2d-A28Dr7Zgwa3P7nDg7M=w534-h667-no?authuser=0',
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://lh3.googleusercontent.com/trXjVkFc4Q4G0X1WWBipCSiB-dYS4rIpMM4ruVB1Gdn9UO3El_u9OAYonrNBdnA5b-7oqLQ_9WosVnEjqvhMpUadpkuGr-Vkub_WaAQa1AKYc__Bu5moH76ZJn23pyUDdYTDeVFxFvRnCcXdN0alK9rmxFCsn0A0HRONUHWyPqta8Bb8ruenTmoUBkp-CuSj3XKw2hIKBPrnrwljHZZEuLhluI4vEO6Oi_1KVgCfvg0p_PXQc-BY0x7wFyT-lcxHyYWzv_RCz8FLr0g7iQji1iERteWxhcZYq56kdTnq16tfK1h8_HVRKaO3rF6c24TxDd6XbTRQqZFhbVLS6rTUfMWdyuIkDV7POBGNhz_dLAKaj9R19jD5eFqKeh_5ksDIDsF7rjYWs9GmIN-b7Im5b-rpoFEaynCxuNDDkjZPHaKU_LzxS8RktD0JuTTVUFQrA7nNhMeQP3twahnT8iOb15FwKo7Oxt2F7WsBZ2XrHcOL6aAqvLcWgNqXkb4nFgkkCwQ1CAtf5A-CZdzc4UnLTT-sJgPgxMEdKw0IComFrBHYW8q9b39q38kFSkwJprhJJbzj2f0bL-q6GCUkgsBYaq7fktjijmKwWKRoyZE3hj__YQNmp9po8uvza9cPZ-jWz855P4AAyiXWPRIItEWXNSJpAa088nZOyoFq2Rkj6lF4zngSQ8vGGzIiC164N9wrF4kuMrxciYxeAHfs5V_jRUDZzLL2jOf92_Z-BcThG9s_riCeu_ZvKZ0mR-8EJ5qcEG46L0XN9-JSLdZtTH50DEPhXDC3ESfsUbz1AgHBCUthO6WH7PDkF-F7CDMnhQ82q1CuXcTIE5GCtmyQUh-2PmhxbPEtJVrkHn_ry0oaWHAb__zrnO1yuJBiSUYyMJ5JaB5Mtm6wvShVGZ__k6QSPFkkguu-EYCfQmHHEPI=w534-h667-no?authuser=0',
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://lh3.googleusercontent.com/T2ZHBmubJ4O3nAFdWK3yDCDV5dDkP8dCYKxCQM9UcZWm0ZoZaYRRUk5-uvNqRAMU_DcN-qDNo4Bca9tFSc5wBVihmIHHDRRbYQBs8-BOeb-sIN3yKb2is9uL8uPgF_wJstQ5PVwfGVIZvqDmVkkvwkN5nYeLiiCU2nbzjdBoljORpxk85Z_mGGsr1Jpjx-tqOXbtqN5jkF6aPx1N5T8gTTHjVOvu4FPHb1iwYJrsvJPB9ciLL0UIE1HvefAmULvr3BlL_2pObhWRu1N0RsonGyHXz2lugA7mGqgbsrgW1yZ4ceKoJ5BlbO4YAy6RsmeVtjus5UR31eCOSA_fOsajdkwdZGciL2L7Jhq628IePZ3cEbjfKbeCJOKzLqMWlhGowfJZ1xPr_EeFmTUowjiuSuXGvhKrPORQQzIJueQSH0Lu4L0eV0q2_SCpl3PDXshgQsEA0602dV-uJIQCrg04SxRPjd1SVCffTgRUJgoZUWhzTJCGkmGE3OnHJiumV1dFCiJ9GVMwyL9xfb_7d5AdjnSPegwJQk4fmwRysGsNJ7gFMji81jy6KXwtY6Z5_l78dfxrvguM5gyf6gmfF_EWSy-A6LcWe78vnL3Dr3oKzXk2RwEBgu4BtwaPsTv_7lhD16aT73fHi6vsl4RlEE5pO_ZfWgLhL7K7u5k529deGQGR2bbIyXVglf_30iX1ZVRC--d4W3RtiDBqBRBs4uBUIFuFyupdznYQucfVRvQXvMNUkEV3DRYCTRe7Dbf72g3q2qzXRxHgRCdGnqH5PLYa_U1bqSjHHfVdXSbvXbXNce-CGywwUGePc0t3_D9gZRmeLUjpqS4V-eo3MzS9YSOFQ8ATRvvXlbm3eWvJ67rmtnZfOSsIyMmc7HHN1HrboqcPNRecNnjrP6P0lC92zkCvrtoHXc3ysCbfksUQWdc=w1001-h667-no?authuser=0',
    },
  ];

  return (
    <>
      <section className='photography__works__section' id={id}>
        <div className="ph__works__title" data-aos="fade-right">
          <h2 className="section__title ph">OUR WORKS</h2>
          <p className='ph__works__subtitle'>FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THEOCEAN.</p>
          <Button page='photography'>VIEW ALL WORKS</Button>
        </div>
        <div style={{overflow: 'hidden'}}>
          <div className="works__imgs__container">
            {works.slice(0, `${all ? works.length : 6}`).map(w => (
              <div
                key={w.id}
                className='work__box'
                data-aos="fade-up"
                data-aos-delay={w.delay}
              >
                <img src={w.img} alt="" />
                <div>
                  <button onClick={() => {
                      setOpenSider(prev => !prev)
                      setImage(w.img)
                    }}
                  >
                    <TbArrowsDiagonal className='resize__icon' />
                  </button>
                  <h4>{w.title}</h4>
                  <span>{w.type}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setAll(prev => !prev)} 
            data-aos="fade-up" 
            data-aos-duration='600' 
            className='load__more__btn'
          >
            {all ? 'LESS' : 'LOAD MORE'}
          </button>
        </div>
      </section>
      {openSlider && <MainSlider img={img} setOpenSider={setOpenSider} />}
    </>
  )
}

export default OurPhotographyWorks;