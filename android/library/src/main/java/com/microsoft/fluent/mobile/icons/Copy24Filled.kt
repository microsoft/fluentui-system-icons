package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Copy24: ImageVector
  get() {
    if (_copy24 != null) {
      return _copy24!!
    }
    _copy24 = fluentIcon(name = "Filled.Copy24", 24f) {
      materialPath {
          moveTo(5.503F, 4.627F)
          lineTo(5.5F, 6.75F)
          verticalLineToRelative(10.504F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(8.616F)
          curveToRelative(-0.309F, 0.874F, -1.142F, 1.5F, -2.122F, 1.5F)
          horizontalLineTo(8.75F)
          curveToRelative(-2.623F, 0.0F, -4.75F, -2.126F, -4.75F, -4.75F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.98F, 0.627F, -1.815F, 1.503F, -2.123F)
          close()
          moveTo(17.75F, 2.0F)
          curveTo(18.993F, 2.0F, 20.0F, 3.007F, 20.0F, 4.25F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineToRelative(-13.0F)
          curveTo(6.5F, 3.007F, 7.507F, 2.0F, 8.75F, 2.0F)
          horizontalLineToRelative(9.0F)
          close()        
      }
    }
    return _copy24!!
  }

private var _copy24: ImageVector? = null
