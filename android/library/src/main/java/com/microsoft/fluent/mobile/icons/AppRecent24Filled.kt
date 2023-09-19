package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AppRecent24: ImageVector
  get() {
    if (_appRecent24 != null) {
      return _appRecent24!!
    }
    _appRecent24 = fluentIcon(name = "Filled.AppRecent24", 24f) {
      materialPath {
          moveTo(18.0F, 19.75F)
          curveToRelative(0.0F, 1.19F, -0.925F, 2.166F, -2.096F, 2.245F)
          lineTo(15.75F, 22.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-1.19F, 0.0F, -2.166F, -0.925F, -2.245F, -2.096F)
          lineTo(6.0F, 19.75F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -1.19F, 0.925F, -2.166F, 2.096F, -2.245F)
          lineTo(8.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(1.19F, 0.0F, 2.166F, 0.925F, 2.245F, 2.096F)
          lineTo(18.0F, 4.25F)
          verticalLineToRelative(15.5F)
          close()
          moveTo(19.0F, 5.0F)
          horizontalLineToRelative(0.75F)
          curveToRelative(1.19F, 0.0F, 2.166F, 0.925F, 2.245F, 2.096F)
          lineTo(22.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.19F, -0.925F, 2.166F, -2.096F, 2.245F)
          lineTo(19.75F, 19.0F)
          horizontalLineTo(19.0F)
          verticalLineTo(5.0F)
          close()
          moveTo(5.0F, 19.0F)
          horizontalLineTo(4.25F)
          curveToRelative(-1.19F, 0.0F, -2.166F, -0.925F, -2.245F, -2.096F)
          lineTo(2.0F, 16.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -1.19F, 0.925F, -2.166F, 2.096F, -2.245F)
          lineTo(4.25F, 5.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(14.0F)
          close()        
      }
    }
    return _appRecent24!!
  }

private var _appRecent24: ImageVector? = null
