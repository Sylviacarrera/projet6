(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const c="data/photographers.json",i=async()=>(await(await fetch(c)).json()).photographers,d=async()=>(await(await fetch(c)).json()).media,p=async r=>(await d()).filter(o=>parseInt(r)===parseInt(o.photographerId)),u=async r=>(await i()).find(o=>parseInt(r)===parseInt(o.id)),l=r=>r.sort((t,s)=>{const o=new Date(t.date);return new Date(s.date)-o}),m=r=>r.sort((t,s)=>{const o=parseInt(t.likes);return parseInt(s.likes)-o}),f=r=>r.sort((t,s)=>{const o=t.title.toLowerCase(),e=s.title.toLowerCase();return o.localeCompare(e)}),h=document.querySelector(".photographer_section"),y=document.querySelector("#nmbLike"),g=document.querySelector("#priceContainer"),w=document.querySelector("#detailContainer"),B=document.querySelector("#mediaContainer");export{g as a,u as b,w as c,p as d,l as e,f,i as g,B as m,y as n,h as p,m as s};