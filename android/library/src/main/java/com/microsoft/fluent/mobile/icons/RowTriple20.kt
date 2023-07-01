package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RowTriple20: ImageVector
  get() {
    if (_rowTriple20 != null) {
      return _rowTriple20!!
    }
    _rowTriple20 = fluentIcon(name = "Filled.RowTriple20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.672F, 2.0F, 3.0F, 2.672F, 3.0F, 3.5F)
          verticalLineToRelative(1.0F)
          curveTo(3.0F, 5.328F, 3.672F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(11.0F)
          curveTo(16.328F, 6.0F, 17.0F, 5.328F, 17.0F, 4.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 2.672F, 16.328F, 2.0F, 15.5F, 2.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveTo(3.672F, 8.0F, 3.0F, 8.672F, 3.0F, 9.5F)
          verticalLineToRelative(1.0F)
          curveTo(3.0F, 11.328F, 3.672F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 8.672F, 16.328F, 8.0F, 15.5F, 8.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveTo(3.672F, 14.0F, 3.0F, 14.672F, 3.0F, 15.5F)
          verticalLineToRelative(1.0F)
          curveTo(3.0F, 17.328F, 3.672F, 18.0F, 4.5F, 18.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _rowTriple20!!
  }

private var _rowTriple20: ImageVector? = null
