package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ColumnTriple24: ImageVector
  get() {
    if (_columnTriple24 != null) {
      return _columnTriple24!!
    }
    _columnTriple24 = fluentIcon(name = "Filled.ColumnTriple24", 24f) {
      materialPath {
          moveTo(4.5F, 21.0F)
          curveTo(3.12F, 21.0F, 2.0F, 19.88F, 2.0F, 18.5F)
          verticalLineToRelative(-13.0F)
          curveTo(2.0F, 4.12F, 3.12F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(1.0F)
          curveTo(6.88F, 3.0F, 8.0F, 4.12F, 8.0F, 5.5F)
          verticalLineToRelative(13.0F)
          curveTo(8.0F, 19.88F, 6.88F, 21.0F, 5.5F, 21.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveTo(10.12F, 21.0F, 9.0F, 19.88F, 9.0F, 18.5F)
          verticalLineToRelative(-13.0F)
          curveTo(9.0F, 4.12F, 10.12F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(1.0F)
          curveTo(13.88F, 3.0F, 15.0F, 4.12F, 15.0F, 5.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-1.0F)
          close()
          moveToRelative(4.5F, -2.5F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-13.0F)
          curveTo(22.0F, 4.12F, 20.88F, 3.0F, 19.5F, 3.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(17.12F, 3.0F, 16.0F, 4.12F, 16.0F, 5.5F)
          verticalLineToRelative(13.0F)
          close()        
      }
    }
    return _columnTriple24!!
  }

private var _columnTriple24: ImageVector? = null
