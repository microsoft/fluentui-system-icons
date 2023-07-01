package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Alert24: ImageVector
  get() {
    if (_alert24 != null) {
      return _alert24!!
    }
    _alert24 = fluentIcon(name = "Filled.Alert24", 24f) {
      materialPath {
          moveTo(9.042F, 19.003F)
          horizontalLineToRelative(5.916F)
          curveToRelative(-0.238F, 1.418F, -1.472F, 2.498F, -2.958F, 2.498F)
          curveToRelative(-1.486F, 0.0F, -2.72F, -1.08F, -2.958F, -2.498F)
          close()
          moveToRelative(2.958F, -17.0F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.359F, 7.5F, 7.5F)
          verticalLineToRelative(4.0F)
          lineToRelative(1.418F, 3.16F)
          curveToRelative(0.055F, 0.122F, 0.084F, 0.254F, 0.084F, 0.389F)
          curveToRelative(0.0F, 0.524F, -0.426F, 0.95F, -0.95F, 0.95F)
          horizontalLineToRelative(-16.1F)
          curveToRelative(-0.134F, 0.0F, -0.266F, -0.029F, -0.388F, -0.083F)
          curveToRelative(-0.479F, -0.215F, -0.693F, -0.777F, -0.479F, -1.256F)
          lineToRelative(1.415F, -3.16F)
          verticalLineTo(9.49F)
          lineToRelative(0.005F, -0.25F)
          curveTo(4.644F, 5.211F, 7.955F, 2.004F, 12.0F, 2.004F)
          close()        
      }
    }
    return _alert24!!
  }

private var _alert24: ImageVector? = null
