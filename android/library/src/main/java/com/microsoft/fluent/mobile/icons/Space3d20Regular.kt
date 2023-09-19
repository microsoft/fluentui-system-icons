package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Space3d20: ImageVector
  get() {
    if (_space3d20 != null) {
      return _space3d20!!
    }
    _space3d20 = fluentIcon(name = "Regular.Space3d20", 320f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(13.0F, 0.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveTo(4.895F, 4.0F, 4.0F, 4.895F, 4.0F, 6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(6.0F)
          close()
          moveTo(4.0F, 11.992F)
          lineTo(5.138F, 10.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.992F)
          close()
          moveTo(4.862F, 12.5F)
          horizontalLineToRelative(2.76F)
          lineTo(8.338F, 10.0F)
          horizontalLineTo(6.29F)
          lineToRelative(-1.428F, 2.5F)
          close()
          moveTo(4.0F, 13.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(0.623F)
          lineToRelative(0.714F, -2.5F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(4.377F, 0.0F)
          lineTo(7.663F, 16.0F)
          horizontalLineToRelative(4.674F)
          lineToRelative(-0.714F, -2.5F)
          horizontalLineTo(8.377F)
          close()
          moveToRelative(4.286F, 0.0F)
          lineToRelative(0.714F, 2.5F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-0.5F)
          horizontalLineToRelative(-3.337F)
          close()
          moveToRelative(2.475F, -1.0F)
          lineTo(13.71F, 10.0F)
          horizontalLineToRelative(-2.047F)
          lineToRelative(0.714F, 2.5F)
          horizontalLineToRelative(2.761F)
          close()
          moveToRelative(-3.8F, 0.0F)
          lineTo(10.622F, 10.0F)
          horizontalLineTo(9.377F)
          lineToRelative(-0.714F, 2.5F)
          horizontalLineToRelative(2.674F)
          close()
          moveTo(16.0F, 11.992F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-1.138F)
          lineTo(16.0F, 11.992F)
          close()        
      }
    }
    return _space3d20!!
  }

private var _space3d20: ImageVector? = null
