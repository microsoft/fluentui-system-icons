package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentFolder16: ImageVector
  get() {
    if (_documentFolder16 != null) {
      return _documentFolder16!!
    }
    _documentFolder16 = fluentIcon(name = "Filled.DocumentFolder16", 16f) {
      materialPath {
          moveTo(12.5F, 9.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(4.085F)
          curveToRelative(0.582F, 0.206F, 1.0F, 0.762F, 1.0F, 1.415F)
          verticalLineToRelative(3.55F)
          curveTo(12.838F, 9.017F, 12.671F, 9.0F, 12.5F, 9.0F)
          close()
          moveTo(6.854F, 4.732F)
          lineTo(11.0F, 8.88F)
          verticalLineTo(3.5F)
          curveTo(11.0F, 2.672F, 10.328F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.672F, 2.0F, 3.0F, 2.672F, 3.0F, 3.5F)
          verticalLineToRelative(0.55F)
          curveTo(3.162F, 4.017F, 3.329F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(1.586F)
          curveToRelative(0.663F, 0.0F, 1.299F, 0.263F, 1.768F, 0.732F)
          close()
          moveTo(3.5F, 5.0F)
          curveTo(2.672F, 5.0F, 2.0F, 5.672F, 2.0F, 6.5F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-1.586F)
          curveToRelative(-0.132F, 0.0F, -0.26F, -0.053F, -0.353F, -0.146F)
          lineTo(6.146F, 5.439F)
          curveTo(5.866F, 5.158F, 5.484F, 5.0F, 5.086F, 5.0F)
          horizontalLineTo(3.5F)
          close()        
      }
    }
    return _documentFolder16!!
  }

private var _documentFolder16: ImageVector? = null
