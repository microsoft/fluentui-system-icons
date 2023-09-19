package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextUnderline24: ImageVector
  get() {
    if (_textUnderline24 != null) {
      return _textUnderline24!!
    }
    _textUnderline24 = fluentIcon(name = "Regular.TextUnderline24", 24f) {
      materialPath {
          moveTo(6.75F, 19.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(17.25F, 20.5F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 20.5F, 6.0F, 20.164F, 6.0F, 19.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(6.75F, 19.0F)
          horizontalLineToRelative(10.5F)
          close()
          moveToRelative(10.5F, -15.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(18.0F, 4.75F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 4.394F, -2.063F, 6.75F, -6.003F, 6.75F)
          curveToRelative(-3.855F, 0.0F, -5.91F, -2.255F, -5.994F, -6.466F)
          lineTo(6.0F, 10.75F)
          verticalLineToRelative(-6.0F)
          curveTo(6.0F, 4.336F, 6.336F, 4.0F, 6.75F, 4.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(7.5F, 4.75F)
          verticalLineToRelative(6.0F)
          curveTo(7.497F, 14.358F, 8.934F, 16.0F, 11.997F, 16.0F)
          curveToRelative(2.985F, 0.0F, 4.428F, -1.56F, 4.5F, -4.976F)
          lineTo(16.5F, 10.75F)
          verticalLineToRelative(-6.0F)
          curveTo(16.5F, 4.336F, 16.836F, 4.0F, 17.25F, 4.0F)
          close()        
      }
    }
    return _textUnderline24!!
  }

private var _textUnderline24: ImageVector? = null
