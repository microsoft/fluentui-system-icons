package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentLandscape24: ImageVector
  get() {
    if (_documentLandscape24 != null) {
      return _documentLandscape24!!
    }
    _documentLandscape24 = fluentIcon(name = "Filled.DocumentLandscape24", 24f) {
      materialPath {
          moveTo(22.0F, 12.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-6.0F)
          close()
          moveToRelative(-0.5F, -1.5F)
          horizontalLineTo(16.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(4.5F)
          lineToRelative(6.0F, 6.0F)
          close()        
      }
    }
    return _documentLandscape24!!
  }

private var _documentLandscape24: ImageVector? = null
