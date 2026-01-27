
// src/pages/Blog.tsx
import { useMemo, useState, ChangeEvent } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { posts } from '@/data/posts'
import { Post } from '@/types/Post'

const POSTS_PER_PAGE = 5

export default function BlogComponent() {
  const [search, setSearch] = useState<string>('')
  const [order, setOrder] = useState<'asc' | 'desc'>('desc')
  const [currentPage, setCurrentPage] = useState<number>(0)

  const filteredPosts: Post[] = useMemo(() => {
    return posts
      .filter(post =>
        `${post.title} ${post.excerpt}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return order === 'desc'
          ? dateB - dateA
          : dateA - dateB
      })
  }, [search, order])

  const pageCount = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const start = currentPage * POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(
    start,
    start + POSTS_PER_PAGE
  )

  const handlePageChange: ReactPaginateProps['onPageChange'] =
    ({ selected }) => {
      setCurrentPage(selected)
    }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    setCurrentPage(0)
  }

  return (
    <section className="mx-auto px-4 py-10">
   

      {/* Controles */}
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar por título ou palavra-chave..."
          value={search}
          onChange={handleSearch}
          className="flex-1 px-4 py-2 bg-zinc-900 border border-white "
        />

        <select
          value={order}
          onChange={e => setOrder(e.target.value as 'asc' | 'desc')}
          className="rpgui-dropdown px-4 py-2"
        >
          <option value="desc">Mais recentes</option>
          <option value="asc">Mais antigos</option>
        </select>
      </div>

      {/* Lista */}
      <ul className="space-y-6">
        {currentPosts.map(post => (
          <li
            key={post.slug}
            className="rpgui-container framed-golden mx-0!"
          >
            <a href={post.url} className="block">
              <h2 className="text-2xl font-semibold mb-0! mx-0!">
                {post.title}
              </h2>
<hr className='golden mb-4' />
              <p className="text-sm text-zinc-400 mb-3">
                {new Date(post.date).toLocaleDateString('pt-BR')} por {post.author}
              </p>

              <p className="text-zinc-300!">
                {post.excerpt}
              </p>
            </a>
          </li>
        ))}

        {currentPosts.length === 0 && (
          <p className="text-zinc-400">
            Nenhum post encontrado.
          </p>
        )}
      </ul>

      {/* Paginação */}
      {pageCount > 1 && (
        <div className="mt-10">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageChange}
            forcePage={currentPage}
            previousLabel="←"
            nextLabel="→"
            breakLabel="..."
            containerClassName="flex justify-center gap-2"
            pageClassName="px-3 py-1 border border-zinc-700 rounded"
            activeClassName="bg-zinc-700"
            previousClassName="px-3 py-1 border border-zinc-700 rounded"
            nextClassName="px-3 py-1 border border-zinc-700 rounded"
            disabledClassName="opacity-40"
          />
        </div>
      )}
    </section>
  )
}
