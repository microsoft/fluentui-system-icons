package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenStop24: ImageVector
  get() {
    if (_shareScreenStop24 != null) {
      return _shareScreenStop24!!
    }
    _shareScreenStop24 = fluentIcon(name = "Filled.ShareScreenStop24", 24f) {
      materialPath {
          moveTo(4.25F, 4.0F)
          horizontalLineToRelative(15.5F)
          curveTo(20.993F, 4.0F, 22.0F, 5.007F, 22.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 20.0F, 2.0F, 18.993F, 2.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(2.0F, 5.007F, 3.007F, 4.0F, 4.25F, 4.0F)
          close()
          moveToRelative(5.03F, 4.215F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(2.72F, 2.72F)
          lineToRelative(-2.72F, 2.725F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          lineTo(12.0F, 13.057F)
          lineToRelative(2.724F, 2.723F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.294F, -0.293F, 0.294F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.723F, -2.724F)
          lineToRelative(2.723F, -2.715F)
          curveToRelative(0.293F, -0.292F, 0.294F, -0.767F, 0.002F, -1.06F)
          curveToRelative(-0.293F, -0.294F, -0.768F, -0.295F, -1.061F, -0.002F)
          lineTo(12.0F, 10.936F)
          lineToRelative(-2.72F, -2.72F)
          close()        
      }
    }
    return _shareScreenStop24!!
  }

private var _shareScreenStop24: ImageVector? = null
