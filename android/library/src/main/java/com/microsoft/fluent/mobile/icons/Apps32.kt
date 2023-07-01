package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Apps32: ImageVector
  get() {
    if (_apps32 != null) {
      return _apps32!!
    }
    _apps32 = fluentIcon(name = "Filled.Apps32", 32f) {
      materialPath {
          moveTo(24.808F, 2.954F)
          curveToRelative(-1.27F, -1.27F, -3.327F, -1.27F, -4.596F, 0.0F)
          lineToRelative(-3.213F, 3.213F)
          curveTo(16.955F, 4.41F, 15.517F, 3.0F, 13.75F, 3.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(19.5F)
          curveTo(3.0F, 27.545F, 4.455F, 29.0F, 6.25F, 29.0F)
          horizontalLineToRelative(19.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-7.5F)
          curveToRelative(0.0F, -1.764F, -1.406F, -3.2F, -3.158F, -3.249F)
          lineToRelative(3.209F, -3.208F)
          curveToRelative(1.269F, -1.27F, 1.269F, -3.327F, 0.0F, -4.596F)
          lineToRelative(-4.243F, -4.243F)
          close()
          moveTo(17.0F, 12.824F)
          lineTo(19.176F, 15.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(-2.176F)
          close()
          moveTo(15.0F, 15.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(6.25F)
          curveTo(5.0F, 5.56F, 5.56F, 5.0F, 6.25F, 5.0F)
          horizontalLineToRelative(7.5F)
          curveTo(14.44F, 5.0F, 15.0F, 5.56F, 15.0F, 6.25F)
          verticalLineTo(15.0F)
          close()
          moveTo(5.0F, 17.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(6.25F)
          curveTo(5.56F, 27.0F, 5.0F, 26.44F, 5.0F, 25.75F)
          verticalLineTo(17.0F)
          close()
          moveToRelative(12.0F, 10.0F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(8.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(17.0F)
          close()        
      }
    }
    return _apps32!!
  }

private var _apps32: ImageVector? = null
