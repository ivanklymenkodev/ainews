"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.scrape-it.cloud/scrape/google?q=Medium.com AI Articles after:2023-12-07",
        {
          headers: {
            "x-api-key": "8104ce7d-7dc2-4e1f-a440-b66accd39906",
          },
        }
      );
      setSearchResults(response.data.organicResults);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 p-[100px] flex flex-col items-center justify-start">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 flex flex-col items-start justify-start w-full">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            AI New Search Platform
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-w-[1024px] flex flex-col items-start min-w-[100vh]">
          {searchResults.map((item: any, key: any) => {
            return (
              <li key={key} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <p>December 7, 2023</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/ainews`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {item.title}
                            </Link>
                          </h2>
                          {/* <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div> */}
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {item.snippet}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={item.link}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "AI New"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {/* {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )} */}
    </>
  );
}
