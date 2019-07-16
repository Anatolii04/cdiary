package cdiary.repository;

import cdiary.domain.Session;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Session entity.
 */
@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {

    @Query(value = "select distinct session from Session session left join fetch session.tags",
        countQuery = "select count(distinct session) from Session session")
    Page<Session> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct session from Session session left join fetch session.tags")
    List<Session> findAllWithEagerRelationships();

    @Query("select session from Session session left join fetch session.tags where session.id =:id")
    Optional<Session> findOneWithEagerRelationships(@Param("id") Long id);

}
