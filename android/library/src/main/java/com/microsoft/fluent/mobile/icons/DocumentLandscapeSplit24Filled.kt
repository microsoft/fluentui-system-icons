package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentLandscapeSplit24: ImageVector
  get() {
    if (_documentLandscapeSplit24 != null) {
      return _documentLandscapeSplit24!!
    }
    _documentLandscapeSplit24 = fluentIcon(name = "Filled.DocumentLandscapeSplit24", 24f) {
      materialPath {
          moveTo(10.5F, 4.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.5F)
          verticalLineTo(4.0F)
          close()
          moveTo(12.0F, 20.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(16.0F)
          close()
          moveToRelative(4.0F, -9.5F)
          horizontalLineToRelative(5.5F)
          lineToRelative(-6.0F, -6.0F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          close()        
      }
    }
    return _documentLandscapeSplit24!!
  }

private var _documentLandscapeSplit24: ImageVector? = null
