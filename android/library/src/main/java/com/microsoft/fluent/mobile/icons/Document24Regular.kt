package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Document24: ImageVector
  get() {
    if (_document24 != null) {
      return _document24!!
    }
    _document24 = fluentIcon(name = "Regular.Document24", 24f) {
      materialPath {
          moveTo(6.0F, 2.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(16.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(9.828F)
          curveToRelative(0.0F, -0.53F, -0.21F, -1.04F, -0.586F, -1.414F)
          lineToRelative(-5.828F, -5.828F)
          curveTo(13.211F, 2.21F, 12.703F, 2.0F, 12.172F, 2.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(5.5F, 4.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(11.88F, 4.5F)
          horizontalLineTo(14.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(4.62F)
          lineToRelative(3.88F, 3.88F)
          close()        
      }
    }
    return _document24!!
  }

private var _document24: ImageVector? = null
