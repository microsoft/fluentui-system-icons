package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleMultiple20: ImageVector
  get() {
    if (_tableSimpleMultiple20 != null) {
      return _tableSimpleMultiple20!!
    }
    _tableSimpleMultiple20 = fluentIcon(name = "Filled.TableSimpleMultiple20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(2.0F)
          horizontalLineTo(4.5F)
          close()
          moveTo(2.0F, 12.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 15.0F, 2.0F, 13.88F, 2.0F, 12.5F)
          close()
          moveTo(9.0F, 15.0F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(6.0F, -10.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(3.5F)
          curveTo(13.88F, 2.0F, 15.0F, 3.12F, 15.0F, 4.5F)
          close()
          moveTo(7.499F, 18.0F)
          curveToRelative(-1.21F, 0.0F, -2.218F, -0.859F, -2.45F, -2.0F)
          horizontalLineToRelative(7.45F)
          curveToRelative(1.934F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(5.05F)
          curveToRelative(1.141F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          verticalLineToRelative(5.75F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineToRelative(-5.75F)
          close()        
      }
    }
    return _tableSimpleMultiple20!!
  }

private var _tableSimpleMultiple20: ImageVector? = null
