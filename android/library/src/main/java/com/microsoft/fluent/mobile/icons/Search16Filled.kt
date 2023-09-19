package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search16: ImageVector
  get() {
    if (_search16 != null) {
      return _search16!!
    }
    _search16 = fluentIcon(name = "Filled.Search16", 16f) {
      materialPath {
          moveTo(9.107F, 10.168F)
          curveTo(8.372F, 10.692F, 7.472F, 11.0F, 6.5F, 11.0F)
          curveTo(4.015F, 11.0F, 2.0F, 8.985F, 2.0F, 6.5F)
          reflectiveCurveTo(4.015F, 2.0F, 6.5F, 2.0F)
          reflectiveCurveTo(11.0F, 4.015F, 11.0F, 6.5F)
          curveToRelative(0.0F, 0.972F, -0.308F, 1.872F, -0.832F, 2.607F)
          lineToRelative(3.612F, 3.613F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.613F, -3.612F)
          close()
          moveTo(9.5F, 6.5F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          close()        
      }
    }
    return _search16!!
  }

private var _search16: ImageVector? = null
