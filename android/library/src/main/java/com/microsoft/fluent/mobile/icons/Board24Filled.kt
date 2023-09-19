package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Board24: ImageVector
  get() {
    if (_board24 != null) {
      return _board24!!
    }
    _board24 = fluentIcon(name = "Filled.Board24", 24f) {
      materialPath {
          moveTo(11.499F, 9.5F)
          lineTo(11.5F, 21.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.356F, -3.245F, -3.065F)
          lineTo(3.0F, 17.752F)
          verticalLineTo(9.499F)
          horizontalLineToRelative(8.499F)
          close()
          moveToRelative(1.5F, 5.999F)
          horizontalLineTo(21.5F)
          verticalLineToRelative(2.253F)
          curveToRelative(0.0F, 1.795F, -1.454F, 3.25F, -3.25F, 3.25F)
          lineTo(13.0F, 21.0F)
          lineToRelative(-0.001F, -5.502F)
          close()
          moveToRelative(5.252F, -13.001F)
          curveToRelative(1.733F, 0.0F, 3.15F, 1.356F, 3.245F, 3.066F)
          lineToRelative(0.005F, 0.184F)
          lineToRelative(-0.001F, 8.251F)
          horizontalLineToRelative(-8.501F)
          lineTo(13.0F, 2.498F)
          horizontalLineToRelative(5.251F)
          close()
          moveToRelative(-6.751F, 0.0F)
          lineToRelative(-0.001F, 5.501F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.748F)
          curveToRelative(0.0F, -1.795F, 1.456F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(5.25F)
          close()        
      }
    }
    return _board24!!
  }

private var _board24: ImageVector? = null
