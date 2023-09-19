package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Search28: ImageVector
  get() {
    if (_search28 != null) {
      return _search28!!
    }
    _search28 = fluentIcon(name = "Regular.Search28", 28f) {
      materialPath {
          moveTo(11.5F, 2.75F)
          curveToRelative(4.832F, 0.0F, 8.75F, 3.918F, 8.75F, 8.75F)
          curveToRelative(0.0F, 2.146F, -0.773F, 4.112F, -2.055F, 5.634F)
          lineToRelative(6.835F, 6.836F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(23.97F, 25.03F)
          lineToRelative(-6.836F, -6.835F)
          curveToRelative(-1.522F, 1.282F, -3.488F, 2.055F, -5.634F, 2.055F)
          curveToRelative(-4.832F, 0.0F, -8.75F, -3.918F, -8.75F, -8.75F)
          reflectiveCurveToRelative(3.918F, -8.75F, 8.75F, -8.75F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.004F, 0.0F, -7.25F, 3.246F, -7.25F, 7.25F)
          reflectiveCurveToRelative(3.246F, 7.25F, 7.25F, 7.25F)
          reflectiveCurveToRelative(7.25F, -3.246F, 7.25F, -7.25F)
          reflectiveCurveToRelative(-3.246F, -7.25F, -7.25F, -7.25F)
          close()        
      }
    }
    return _search28!!
  }

private var _search28: ImageVector? = null
