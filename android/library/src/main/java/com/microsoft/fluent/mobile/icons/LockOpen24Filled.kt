package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockOpen24: ImageVector
  get() {
    if (_lockOpen24 != null) {
      return _lockOpen24!!
    }
    _lockOpen24 = fluentIcon(name = "Filled.LockOpen24", 24f) {
      materialPath {
          moveTo(12.0F, 2.001F)
          curveToRelative(1.708F, 0.0F, 3.211F, 1.081F, 3.771F, 2.666F)
          curveToRelative(0.184F, 0.521F, -0.089F, 1.092F, -0.61F, 1.276F)
          curveToRelative(-0.483F, 0.171F, -1.01F, -0.052F, -1.23F, -0.502F)
          lineToRelative(-0.045F, -0.107F)
          curveTo(13.606F, 4.542F, 12.854F, 4.0F, 12.0F, 4.0F)
          curveToRelative(-1.054F, 0.0F, -1.917F, 0.815F, -1.993F, 1.85F)
          lineTo(10.0F, 6.0F)
          verticalLineToRelative(1.999F)
          horizontalLineToRelative(7.749F)
          curveToRelative(1.19F, 0.0F, 2.166F, 0.926F, 2.245F, 2.097F)
          lineTo(20.0F, 10.25F)
          verticalLineToRelative(9.496F)
          curveToRelative(0.0F, 1.191F, -0.925F, 2.166F, -2.096F, 2.245F)
          lineToRelative(-0.154F, 0.005F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.19F, 0.0F, -2.166F, -0.925F, -2.245F, -2.096F)
          lineTo(4.0F, 19.746F)
          verticalLineTo(10.25F)
          curveToRelative(0.0F, -1.19F, 0.925F, -2.166F, 2.096F, -2.245F)
          lineTo(6.25F, 8.0F)
          lineToRelative(1.751F, -0.001F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -2.208F, 1.79F, -3.998F, 3.999F, -3.998F)
          close()
          moveToRelative(0.0F, 11.498F)
          curveToRelative(-0.828F, 0.0F, -1.499F, 0.671F, -1.499F, 1.5F)
          curveToRelative(0.0F, 0.827F, 0.671F, 1.498F, 1.499F, 1.498F)
          curveToRelative(0.828F, 0.0F, 1.499F, -0.671F, 1.499F, -1.499F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.498F, -1.499F, -1.498F)
          close()        
      }
    }
    return _lockOpen24!!
  }

private var _lockOpen24: ImageVector? = null
